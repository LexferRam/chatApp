import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
      height='100vh'
      userName='Lexfer'
      userSecret='lfrp58942021'
      projectID='ff174dd1-33e6-463e-b86b-f6fef2cda410'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
//lfrp58942021
export default App;

//dar permisos en linux en un archivo o carpeta
//sudo chmod 777 -R ~/Direccion de la carpeta