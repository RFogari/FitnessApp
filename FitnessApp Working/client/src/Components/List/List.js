import React from "react";


export const List = ({ children }) => {
  return (
    
    <div>
      <table striped bordered condensed hover>
      <tbody>
        <tr>
          {children}
        </tr>

      </tbody>     
      
      </table>
      </div>
  );
};