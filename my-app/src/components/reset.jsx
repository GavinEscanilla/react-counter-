const Reset = ({setCount}) => {
    return (
        <div>
            <button onClick={() => setCount(0)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Reset</button>
        </div>
    )
}

export default Reset