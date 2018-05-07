import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const mainColor = 'slategray';

const Title = styled.h1`
  color: ${props => props.color || 'slategrey'};
  font-size: 2.8em;
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const border = css`
  ${props => {
    if (props.showBorder) {
      return `
        border: 1px solid ${mainColor};
        border-radius: 4px;
      `;
    }
  }};
`;

const ThumbnailWrapper = styled.div`
  flex-basis: 50%;
`;

const Thumbnail = styled.img`
  padding: 5px;
  align-self: center;
  width: 90%;
  margin: 15px;
  filter: grayscale(90%);
  ${border};
`;

class App extends Component {
  render() {
    const thumbnails = Array.from({ length: 4 }, (_, index) => {
      return (
        <ThumbnailWrapper>
          <Thumbnail key={index + 1} src={require(`../assets/thumb${index + 1}.jpg`)} showBorder />
        </ThumbnailWrapper>
      );
    });

    return (
      <div className={this.props.className}>
        <Title color={mainColor}>styled-gram</Title>
        <Gallery>{thumbnails}</Gallery>
      </div>
    );
  }
}

export default styled(App)`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
