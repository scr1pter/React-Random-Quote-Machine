import React from 'react';
import './App.css';

const phrases = [
  {quote: 'As engineers, we were going to be in a position to change the world – not just study it.', author: 'Henry Petroski'}, 
  {quote: 'The scientist discovers a new type of material or energy and the engineer discovers a new use for it.', author: 'Gordon Lindsay Glegg'}, 
  {quote: 'This job is a great scientific adventure. But it’s also a great human adventure.', author: 'Fabiola Gianotti'}, 
  {quote: 'Science can amuse and fascinate us all, but it is engineering that changes the world.', author: 'Isaac Asimov'}, 
  {quote: 'The engineer has been, and is, a maker of history.', author: 'James Kip Finch'}, 
  {quote: 'Scientists study the world as it is; engineers create the world that has never been.', author: 'Theodore von Karman'}, 
  {quote: 'The way to succeed is to double your failure rate.', author: 'Thomas J. Watson'}, 
  {quote: 'Strive for perfection in everything you do. Take the best that exists and make it better.When it does not exist, design it.', author: 'Sir Henry Royce'},
  {quote: 'We are continually faced by great opportunities brilliantly disguised as insoluble problems.', author: 'Lee Iacocca'}, 
  {quote: 'The ideal engineer is a composite … He is not a scientist, he is not a mathematician, he is not a sociologist or a writer; but he may use the knowledge and techniques of any or all of these disciplines in solving engineering problems.', author: 'Nathan W. Dougherty'}
  ]
  
  const colors = ['#A52A2A', '#DEB887', '#5F9EA0', '#7FFF00', '#D2691E', '#FF7F50', '#6495ED', '#FFF8DC', '#DC143C', '#BDBB99'];
  
  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = { 
        indeX: 0  
      };
      
      this.randomIndex = this.randomIndex.bind(this);
    }
    
    randomIndex() { 
      this.setState({
        indeX: Math.floor(Math.random() * 9) 
      })
    }
    
    render(){
      
      return (
       <div id="quote-box" style={{backgroundColor: colors[this.state.indeX+1]}}> 
         <div id="text"><p style={{color: colors[this.state.indeX]}}>"{phrases[this.state.indeX].quote}"</p></div>
         <div id="author"><p style={{color: colors[this.state.indeX]}}>- {phrases[this.state.indeX].author}</p></div> 
         <div class="clicks">
           <button id="new-quote" onClick={this.randomIndex} style={{color: colors[this.state.indeX+1]}}>Next Quote</button> 
           <a id="tweet-quote" href="twitter.com/intent/tweet"><img id="image" alt="" src="https://www.logospng.com/images/122/twitter-icon-myiconfinder-122964.png" /></a>
         </div>
       </div>
        
     )
    }
  }

export default App;
