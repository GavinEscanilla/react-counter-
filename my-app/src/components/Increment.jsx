const Increment = ({count, setCount}) => {
    return (
        <div>
            <button onClick={() => setCount(count +1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Increment</button>
        </div>
    )
}

export default Increment