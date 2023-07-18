import "../MessageSucess/MessageSucess.css"
const MessageSuccess = ({ purchaseID }) => {
  return (
    <h1 className="Message">
      Gracias por su compra! su identificador de transacción es: <span className="purchase">
        {purchaseID}
      </span>
    </h1>
  );
};



export default MessageSuccess;
