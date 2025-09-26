import "./Die.css";

export default function Die(props: DieProps) {
  return (
    <button className={props.isFrozen ? "die is-frozen" : "die"}
        onClick={props.onClick}
        aria-pressed={props.isFrozen}
        aria-label="Die"
        >{props.value}</button>
  );
}

export interface DieProps {
  id: string;
  value: number;
  isFrozen: boolean;
  onClick: () => void;
}
