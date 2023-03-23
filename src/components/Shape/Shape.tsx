const Shape = ({ img, degree = 0 }: { img: any; degree?: number }) => {
  return (
    <div style={{ transform: `rotateZ(${degree}deg)` }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="428"
        height="428"
        fill="none"
        viewBox="0 0 428 428"
      >
        <defs>
          <clipPath id="shape">
            <path
              fill="#D9D9D9"
              stroke="#fff"
              strokeWidth="2"
              d="M427 30.426V398c0 16.016-12.984 29-29 29H30.426C4.59 427-8.349 395.763 9.92 377.494L377.494 9.92C395.763-8.349 427 4.59 427 30.426Z"
            />
          </clipPath>
        </defs>
        <image
          style={{ transform: `rotateZ(${-degree}deg)` }}
          width="428"
          height="428"
          clipPath="url(#shape)"
          href={img}
        />
      </svg>
    </div>
  );
};

export default Shape;
