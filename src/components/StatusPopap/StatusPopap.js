import { useState, useRef, useEffect } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import {
  PopapWrap,
  PopapActiveItem,
  Popap,
  PopapList,
  PopapItem,
} from './StatusPopap.style';

const statusList = [
  { type: 'available' },
  { type: 'busy' },
  { type: 'unavailable' },
];

const StatusPopap = ({ activeItem, setActiveItem }) => {
  const [showPopap, setShowPopap] = useState(false);
  const popapRef = useRef();

  const activeLabelName = statusList.find(
    item => item.type === activeItem,
  ).type;

  const handleOutsideClick = e => {
    const path =
      e.path ||
      (e.composedPath && e.composedPath()) ||
      e.composedPath(e.target);
    if (!path.includes(popapRef.current)) {
      setShowPopap(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const getActiveItem = type => {
    setActiveItem(type);
    setShowPopap(!showPopap);
  };

  const toggleVisiblePopap = () => {
    setShowPopap(!showPopap);
  };

  const styleIcon = () => {
    return {
      transform: showPopap ? 'rotate(180deg)' : null,
      fontSize: '12px',
      marginLeft: '3px',
    };
  };

  return (
    <PopapWrap ref={popapRef} id="popapWrap">
      <PopapActiveItem onClick={toggleVisiblePopap}>
        {activeLabelName}
        <GoTriangleDown style={styleIcon()} />
      </PopapActiveItem>

      {showPopap && (
        <Popap>
          <PopapList>
            {statusList.map((item, index) => (
              <PopapItem
                key={item.type + index}
                onClick={() => getActiveItem(item.type)}
                active={activeItem === item.type ? true : ''}
              >
                {item.type}
              </PopapItem>
            ))}
          </PopapList>
        </Popap>
      )}
    </PopapWrap>
  );
};

export default StatusPopap;
