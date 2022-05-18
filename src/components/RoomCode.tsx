import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss';

export function RoomCode(props: any) {

  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props?.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copiar codigo da sala" />
      </div>
      <span>Sala #{props?.code}</span>
    </button>
  )
}