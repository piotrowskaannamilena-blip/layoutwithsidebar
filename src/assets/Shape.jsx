const MergedShape = ({ fill = "#ffffff", children, style: containerStyle, ...props }) => (
  <div
    style={{
      position: 'relative',
      width: 400,
      height: 370,
      ...containerStyle,
    }}
    {...props}
  >
      {/* Shape 1 */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 60,
          width: 190,
          height: 310,
          backgroundColor: fill,
          borderRadius: '32px 32px 0px 32px',
        }}
      >
        {/* Add content here */}
      </div>
      {/* Shape 2 */}
      <div
        style={{
          position: 'absolute',
          left: 180,
          top: 0,
          width: 220,
          height: 210,
          backgroundColor: fill,
          borderRadius: '32px 32px 32px 32px',
        }}
      >
        {/* Add content here */}
      </div>
      {/* Shape 3 */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 150,
          height: 130,
          backgroundColor: fill,
          borderRadius: '32px 32px 32px 32px',
        }}
      >
        {/* Add content here */}
      </div>
      {/* Shape 4 */}
      <div
        style={{
          position: 'absolute',
          left: 190,
          top: 240,
          width: 210,
          height: 130,
          backgroundColor: fill,
          borderRadius: '0px 32px 32px 0px',
        }}
      >
        {/* Add content here */}
      </div>
      {/* Negative Space 1 - Content container for empty region */}
      <div
        style={{
          position: 'absolute',
          left: 190,
          top: 210,
          width: 210,
          height: 30,
          // Transparent container for content in negative space
        }}
      >
        {/* Add content here */}
      </div>
      {/* Bridge 1 */}
      <svg
        style={{
          position: 'absolute',
          left: 190,
          top: 208,
          width: 32,
          height: 32,
          pointerEvents: 'none',
        }}
        viewBox="0 0 32 32"
      >
        <path d="M 0 0 C 0 23.872 5.76 32 32 32 H 0 Z" fill={fill} />
      </svg>
    {children}
  </div>
);

export default MergedShape;