type Props = {
  chipText: string;
  index: number;
  onClick: (arr: number) => void;
};

export default function ChipItem({ chipText, index, onClick }: Props) {
  return (
    <span className="px-3 py-2 bg-slate-400 rounded-full flex gap-2">
      {chipText}
      <button className="hover:text-white" onClick={() => onClick(index)}>
        X
      </button>
    </span>
  );
}
