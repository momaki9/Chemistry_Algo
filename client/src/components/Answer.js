const Answer = ({submittedValue, changeFunction}) => {
    return (
        <>
            <input placeholder='Enter your answer' value={submittedValue} onChange={changeFunction} name={submittedValue}></input>
        </>
    )
};

export default Answer;