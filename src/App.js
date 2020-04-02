import React, { Component } from 'react';
   import Container from 'react-bootstrap/Container'
   
   import './App.scss';
   import Tasks from './components/tasks/Tasks';
   import Header from './components/header/Header';
   
  //  import { library } from '@fortawesome/fontagitwesome-svg-core'
  //  import { faCheckCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons'   
  //  library.add(faCheckCircle, faTrashAlt)
  import { library }  from '@fortawesome/fontawesome-svg-core'
  import { far } from '@fortawesome/free-regular-svg-icons'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  
  library.add(far, fas)
  
   class App extends Component {
     render() {
       return (
         <div>
           <Header/>
           <Container>
             <Tasks/>
           </Container>
         </div>
       );
     }
   }
   
   export default App;