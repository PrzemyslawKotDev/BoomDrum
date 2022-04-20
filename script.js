const bank = [
      {
        id: 1,
        key: 'Q',
        title: 'Savannah Splash',
        url: 'https://freesound.org/data/previews/171/171492_2565043-lq.mp3'
      },
      {
        id: 2,
        key: 'W',
        title: 'Savannah Bell',
        url: 'https://freesound.org/data/previews/171/171482_2565043-lq.mp3'
      },
      {
        id: 3,
        key: 'E',
        title: 'Savannah Middle Crash',
        url: 'https://freesound.org/data/previews/171/171483_2565043-lq.mp3'
      },
      {
        id: 4,
        key: 'A',
        title: 'Savannah Rack Tom 1',
        url: 'https://freesound.org/data/previews/171/171487_2565043-lq.mp3'
      },
      {
        id: 5,
        key: 'S',
        title: 'Savannah Rack Tom 2',
        url: 'https://freesound.org/data/previews/171/171490_2565043-lq.mp3'
      },
      {
        id: 6,
        key: 'D',
        title: 'Savannah Floor Tom',
        url: 'https://freesound.org/data/previews/171/171485_2565043-lq.mp3'
      },
      {
        id: 7,
        key: 'Z',
        title: 'Savannah Closed HH',
        url: 'https://freesound.org/data/previews/171/171480_2565043-lq.mp3'
      },
      {
        id: 8,
        key: 'X',
        title: 'Savannah Snare',
        url: 'https://freesound.org/data/previews/171/171491_2565043-lq.mp3'
      },
      {
        id: 9,
        key: 'C',
        title: 'Savannah Kick',
        url: 'https://freesound.org/data/previews/171/171484_2565043-lq.mp3'
      }
]
class Buttons extends React.Component {
  constructor(props){
    super(props);
    this.playMusicClick = this.playMusicClick.bind(this);
  }  
  playMusicClick({currentTarget}){
  const button = (currentTarget.innerText);
  this.playSound(button);
  }   
  playSound(item){
  let sound = document.getElementById(item);
  sound.volume = this.props.volume;
  document.getElementById("soundName").innerHTML = sound.title;
  sound.play()
  }
  render(){
    return (
      <div
        className="drum-pad"
        id={this.props.item.id}
        onClick={this.playMusicClick}
        >
      <audio
        src={this.props.item.url}
        className="clip"
        id={this.props.item.key}
        title={this.props.item.title}
        type="audio/mp3"
        ></audio>
      {this.props.item.key}
      </div>
      )
    }        
}
class DrumPad extends React.Component {
  constructor(props){
    super(props);
};    
render(){
    return (
      bank.map((item)=> {
        return (
    <Buttons volume={this.props.volume} item={item}/>
      ) }
    ))}
}
class BoomDrum extends React.Component {
  constructor(props){
    super(props);    
    this.state={
      volume: 1,
      soundName: 'SOUND NAME HERE',
      letter: ''
    }
    this.getLetter = this.getLetter.bind(this);
 }
    volume(){
  const volume = document.getElementById('volume').value;
  this.setState({
    volume: volume
  })}
 componentDidMount(){
   window.addEventListener('keydown', this.getLetter)
 }
  getLetter(e){
    const letter = e.key.toUpperCase();
    this.playSound(letter)
  }
  playSound(item){
  let sound = document.getElementById(item);
  sound.volume = this.state.volume;
  document.getElementById("soundName").innerHTML = sound.title;
  sound.play()
  }
render(){
  return (
  <div>
        <img id="logo"  src="https://pngset.com/images/music-side-drum-icon-drums-drums-music-and-drum-percussion-musical-instrument-axe-tool-transparent-png-2118095.png"/>
        <div id="flex">
          <div id="buttons">
            <DrumPad volume={this.state.volume}/>
          </div>
          <div id="display">
            <div id="volumelabel">VOLUME</div>
            <input onChange={this.volume.bind(this)} type="range" id="volume" min="0" max="1" step=".01"/>
            <div id='soundName'>{this.state.soundName}</div>
          </div>
        </div>
      
  <div id='sign'>by Przemysław Kot</div>
    </div>
  )
}
}
ReactDOM.render(<BoomDrum />, document.getElementById('drum-machine'));
