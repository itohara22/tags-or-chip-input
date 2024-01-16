type Props = {
  suggList: string[];
  clickHandler: (arr: string) => void;
};

const SuggestionList = ({ suggList, clickHandler }: Props) => {
  return (
    <div className="absolute top-10 left-2 right-0 bg-red-200">
      <ul className="bg-red-100">
        {suggList.map((name: string, i: number) => (
          <li key={i}>
            <button
              className="hover:bg-red-200 w-full p-2 text-left"
              onClick={() => clickHandler(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionList;
