import '../css/InfoBlock.css'

function InfoBlock(){

    return(

        <>
        <div className='firstblock'>
            <span style={{ fontWeight: 'bold' }}>Topic : Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
            <p>Total Time : XX minutes XX seconds , Left : XX minutes XX seconds
                <br/>Class : XX | Type : XXXXXXX | Difficulty : XXXXXXX
                <br/>Subject XXXXX | Credit : XXXXXX | Board : XXXX
            </p>

        </div>
        </>
    )

}

export default InfoBlock;