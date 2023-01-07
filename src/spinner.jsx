import styled from "styled-components";

/*
$thickness: 5 px;
$duration: 2500;
$delay: $duration / 6;
*/
const Bookshelfwrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    color: ${(props) => props.theme.primary.main};
    text-align: center;
  }
`;

const Bookslist = styled.ul`
  margin: 0 auto;
  width: 300px;
  padding: 0;
`;

const Bookitem = styled.li`
  position: absolute;
  top: -120px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  list-style: none;
  width: 40px;
  height: 120px;
  opacity: 0;
  background-color: ${(props) => props.theme.primary.dark};
  border: 5px solid white;
  -webkit-transform-origin: bottom left;
  transform-origin: bottom left;
  -webkit-transform: translateX(300px);
  transform: translateX(300px);
  -webkit-animation: travel 2500ms linear infinite;
  animation: travel 2500ms linear infinite;

  &.first {
    top: -140px;
    height: 140px;
  }

  &.first:before,
  &.first:after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: white;
  }

  &.first:after {
    top: initial;
    bottom: 10px;
  }

  &.second:before,
  &.second:after,
  &.fifth:before,
  &.fifth:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 17.5px;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
  }

  &.second:after,
  &.fifth:after {
    top: initial;
    bottom: 10px;
  }

  &.third:before,
  &.third:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 10px;
    left: 9px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 5px solid white;
  }

  &.third:after {
    top: initial;
    bottom: 10px;
  }

  &.fourth {
    top: -130px;
    height: 130px;
  }

  &.fourth:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 46px;
    left: 0;
    width: 100%;
    height: 17.5px;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
  }

  &.fifth {
    top: -100px;
    height: 100px;
  }

  &.sixth {
    top: -140px;
    height: 140px;
  }

  &.sixth:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: "";
    position: absolute;
    bottom: 31px;
    left: 0px;
    width: 100%;
    height: 5px;
    background-color: white;
  }

  &.sixth:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: "";
    position: absolute;
    bottom: 10px;
    left: 9px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 5px solid white;
  }
  :nth-child(1) {
    background: #a90f33;
  }
  :nth-child(2) {
    background: #b88100;
    -webkit-animation-delay: 416.66667ms;
    animation-delay: 416.66667ms;
  }

  :nth-child(3) {
    background: #05b384;
    -webkit-animation-delay: 833.33333ms;
    animation-delay: 833.33333ms;
  }

  :nth-child(4) {
    background: #1190bb;
    -webkit-animation-delay: 1250ms;
    animation-delay: 1250ms;
  }

  :nth-child(5) {
    background: #073b4c;
    -webkit-animation-delay: 1666.66667ms;
    animation-delay: 1666.66667ms;
  }

  :nth-child(6) {
    background: #32809a;
    -webkit-animation-delay: 2083.33333ms;
    animation-delay: 2083.33333ms;
  }

  @-webkit-keyframes move {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: 10px;
    }
  }

  @keyframes move {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: 10px;
    }
  }

  @-webkit-keyframes travel {
    0% {
      opacity: 0;
      -webkit-transform: translateX(300px) rotateZ(0deg) scaleY(1);
      transform: translateX(300px) rotateZ(0deg) scaleY(1);
    }
    6.5% {
      -webkit-transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
      transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
    }
    8.8% {
      -webkit-transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
      transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
    }
    10% {
      opacity: 1;
      -webkit-transform: translateX(270px) rotateZ(0deg);
      transform: translateX(270px) rotateZ(0deg);
    }
    17.6% {
      -webkit-transform: translateX(247.2px) rotateZ(-30deg);
      transform: translateX(247.2px) rotateZ(-30deg);
    }
    45% {
      -webkit-transform: translateX(165px) rotateZ(-30deg);
      transform: translateX(165px) rotateZ(-30deg);
    }
    49.5% {
      -webkit-transform: translateX(151.5px) rotateZ(-45deg);
      transform: translateX(151.5px) rotateZ(-45deg);
    }
    61.5% {
      -webkit-transform: translateX(115.5px) rotateZ(-45deg);
      transform: translateX(115.5px) rotateZ(-45deg);
    }
    67% {
      -webkit-transform: translateX(99px) rotateZ(-60deg);
      transform: translateX(99px) rotateZ(-60deg);
    }
    76% {
      -webkit-transform: translateX(72px) rotateZ(-60deg);
      transform: translateX(72px) rotateZ(-60deg);
    }
    83.5% {
      opacity: 1;
      -webkit-transform: translateX(49.5px) rotateZ(-90deg);
      transform: translateX(49.5px) rotateZ(-90deg);
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(0px) rotateZ(-90deg);
      transform: translateX(0px) rotateZ(-90deg);
    }
  }

  @keyframes travel {
    0% {
      opacity: 0;
      -webkit-transform: translateX(300px) rotateZ(0deg) scaleY(1);
      transform: translateX(300px) rotateZ(0deg) scaleY(1);
    }
    6.5% {
      -webkit-transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
      transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
    }
    8.8% {
      -webkit-transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
      transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
    }
    10% {
      opacity: 1;
      -webkit-transform: translateX(270px) rotateZ(0deg);
      transform: translateX(270px) rotateZ(0deg);
    }
    17.6% {
      -webkit-transform: translateX(247.2px) rotateZ(-30deg);
      transform: translateX(247.2px) rotateZ(-30deg);
    }
    45% {
      -webkit-transform: translateX(165px) rotateZ(-30deg);
      transform: translateX(165px) rotateZ(-30deg);
    }
    49.5% {
      -webkit-transform: translateX(151.5px) rotateZ(-45deg);
      transform: translateX(151.5px) rotateZ(-45deg);
    }
    61.5% {
      -webkit-transform: translateX(115.5px) rotateZ(-45deg);
      transform: translateX(115.5px) rotateZ(-45deg);
    }
    67% {
      -webkit-transform: translateX(99px) rotateZ(-60deg);
      transform: translateX(99px) rotateZ(-60deg);
    }
    76% {
      -webkit-transform: translateX(72px) rotateZ(-60deg);
      transform: translateX(72px) rotateZ(-60deg);
    }
    83.5% {
      opacity: 1;
      -webkit-transform: translateX(49.5px) rotateZ(-90deg);
      transform: translateX(49.5px) rotateZ(-90deg);
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(0px) rotateZ(-90deg);
      transform: translateX(0px) rotateZ(-90deg);
    }
  }
`;

const Shelf = styled.div`
  width: 300px;
  height: 5px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.primary.dark};
  // backgroung-color:black
  position: relative;

  :before,
  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.primary.dark};
    background-image: radial-gradient(rgba(255, 255, 255, 0.5) 30%,transparent 0);
    background-size: 10px 10px;
    background-position: 0 -2.5px;
    top: 200%;
    left: 5%;
    -webkit-animation: move 250ms linear infinite;
    animation: move 250ms linear infinite;
  }

  :after {
    top: 400%;
    left: 7.5%;
  }
`;

const Spinner = (props) => {
  var msg = props.msg;
  if (msg === undefined) {
    msg = "Welcome Home...";
  }
  return (
    <Bookshelfwrapper>
      <Bookslist>
        <Bookitem className="first" />
        <Bookitem className="second" />
        <Bookitem className="third" />
        <Bookitem className="fourth" />
        <Bookitem className="fifth" />
        <Bookitem className="sixth" />
      </Bookslist>
      <Shelf />
      <br />
      <h1>{msg}</h1>
    </Bookshelfwrapper>
  );
};

export default Spinner;
