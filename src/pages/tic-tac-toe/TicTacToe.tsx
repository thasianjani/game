import { useEffect, useState } from 'react'
import './TicTacToe.scss'
import { useNavigate } from 'react-router-dom'

const valueData = [
    {value:''},
    {value:''},
    {value:''},
    {value:''},
    {value:''},
    {value:''},
    {value:''},
    {value:''},
    {value:''}
]

const initialState = {
    data: [...valueData],
    player: '',
    isPlayer: false,
    isGameStart: false,
    message: '',
    countPlayerClickWrongColumn: 0
}

const TicTacToe = () => {
    // const [data, setState((prev)=>({...prev,data:}))] = useState<any[]>([])
    // const [player, setState((prev)=>({...prev,player:))] = useState<string>('')
    // const [isPlayer, setState((prev)=>({...prev,isPlayer:}))] = useState<boolean>()
    // const [isGameStart,setState((prev)=>({...prev,isGameStart:}))] = useState<boolean>()
    // const [message, setState((prev)=>({...prev,message:}))] = useState<string>()
    // const [countPlayerClickWrongColumn,setState((prev)=>({...prev,countPlayerClickWrongColumn:}))] = useState(0)

    const [state, setState] = useState(initialState)
   
    
    const handleClick = (index:number) => {
        if(state.isPlayer){
            if(state.data[index].value !== ''){
                setState((prev)=>({...prev,countPlayerClickWrongColumn:state.countPlayerClickWrongColumn+1}));
                setState((prev)=>({...prev,message:(prev.countPlayerClickWrongColumn === 3 ? 'ih batu banget 🤬. kamu gagal! sekarang giliran aku.':'Udah ada isinya. Ganti ya...')}));
                if(state.countPlayerClickWrongColumn === 3){
                    handleComputerPlayFirst()
                }
            }else{
                setNewData(state.player,index)
                setTimeout(()=>{
                    if(state.isGameStart){
                        setComputerValue();
                    }
                },1000)
            }
        }
    }

    const isWin = (index:number, value:string) => {        
        switch(index){
            case 0 : 
                return winValidation((state.data[1].value === value && state.data[2].value === value) || (state.data[3].value === value && state.data[6].value === value) || (state.data[4].value === value && state.data[8].value === value))
            case 1:
                return winValidation((state.data[0].value == value && state.data[2].value === value) || (state.data[4].value == value && state.data[7].value === value))
            case 2:
                return winValidation((state.data[1].value === value && state.data[2].value === value) || (state.data[5].value === value && state.data[8].value === value) || (state.data[4].value === value && state.data[6].value === value))
            case 3:
                return winValidation((state.data[4].value === value && state.data[5].value === value) || (state.data[0].value === value && state.data[6].value === value))
            case 4:
                return winValidation((state.data[3].value === value && state.data[5].value === value) || (state.data[1].value === value && state.data[7].value === value) || (state.data[2].value === value && state.data[6].value === value))
            case 5:
                return winValidation((state.data[3].value === value && state.data[4].value === value) || (state.data[2].value === value && state.data[8].value === value))
            case 6:
                return winValidation((state.data[7].value === value && state.data[8].value === value) || (state.data[0].value === value && state.data[3].value === value) || (state.data[2].value === value && state.data[4].value === value))
            case 7:
                return winValidation((state.data[6].value === value && state.data[8].value === value) || (state.data[1].value === value && state.data[4].value === value))
            case 8:
                return winValidation((state.data[6].value === value && state.data[7].value === value) || (state.data[2].value === value && state.data[5].value === value) || (state.data[0].value === value && state.data[4].value === value))
            default: return false;
        }
    }

    const winValidation = (validation:boolean) => {
        if(validation){
            return true
        }
        return false;
    }

    const renderChooseValue = () => {
        return(
            <div>
                <div className='text-center'>Mau Apa?</div>
                <div>
                    <button className='btn btn-primary' onClick={()=>setState((prev)=>({...prev,player:'x'}))}>X</button>
                    <button className='btn btn-primary' onClick={()=>setState((prev)=>({...prev,player:'o'}))}>O</button>
                </div>
            </div>
        )
    }

    const renderWhoPlayFirst = () => {
        return(
            <div>
                <div className='text-center'>Mau Duluan?</div>
                <div>
                    <button className='btn btn-primary' onClick={()=>handleClickPlayFirst(true)}>Iya</button>
                    <button className='btn btn-primary' onClick={()=>handleClickPlayFirst(false)}>Engga</button>
                </div>
            </div>
        )
    }

    const handleClickPlayFirst = (value:boolean) => {
        setState((prev)=>({...prev,isGameStart:true,data:[...valueData],isPlayer:value}))
        if(!value){
            handleComputerPlayFirst()
        }
    }

    const handleComputerPlayFirst = () => {
        setState((prev)=>({...prev,isPlayer:false}));
        setComputerValue();
    }

    const setComputerValue = () => {
        setState((prev)=>({...prev,countPlayerClickWrongColumn:state.countPlayerClickWrongColumn+1}));
        let randomNumber = Math.random();
        let index = parseInt(randomNumber.toString().split('.')[1].substring(0,1))
        if(index > 8){
            index = 8;
        }
        if(state.data[index].value !== ''){
            if(state.countPlayerClickWrongColumn === 3){
                setState((prev)=>({...prev,message:'Jalan deh',isPlayer:!prev.isPlayer}))
            }else{
                setComputerValue();
            }
        }else{
            setNewData((state.player==='x'?'o':'x'),index)
        }
    }

    useEffect(()=>{
        if(state.isGameStart){
            setState((prev)=>({...prev,message:(!state.isPlayer?'Tunggu yaa...':'Giliran kamu. Jalan dah')}));
        }
    },[state.isPlayer])

    const setNewData = (value:string, index:number) => {
        let newArray = [...state.data]
        newArray[index].value = value
        setState((prev)=>({...prev,data:newArray,countPlayerClickWrongColumn:0,isPlayer:!prev.isPlayer}))
        if(isWin(index,value)){
            if(value === state.player){
                setState((prev)=>({...prev,message:'🎉 Kamu Menang 🎉',player:'',data:[],isGameStart:false}))
            }else{
                setState((prev)=>({...prev,message:'HAHAHA kamu kalah 🤪',player:'',data:[],isGameStart:false}))
            }
        }
    }

    const showPopUp = () => {
        setTimeout(()=>{
            setState((prev)=>({...prev,message:''}))
        },5000)
        return(
            <div className='popup-container'>
                <span>{state.message}</span>
            </div>
        )
    }

    return(
        <div className="tic-tac-toe center-container page-container">
            { !state.player && renderChooseValue()}
            { state.player && !state.isGameStart && renderWhoPlayFirst()}
            { state.player && state.isGameStart &&
            <div className='content'>
                {
                    state.data.map((item,index)=>(
                        <div key={index} onClick={()=>state.isPlayer?handleClick(index):setState((prev)=>({...prev,message:'Sabar 😠'}))}>{item.value.toUpperCase()}</div>
                    ))
                }
            </div>
            }
            {state.message && showPopUp()}
        </div>
    )
}

export default TicTacToe