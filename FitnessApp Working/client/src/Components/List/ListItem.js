import React from "react";

export const ListItem = props => (
    <row className="show-grid">
    <tr>
    
    <td className="list-group-item">{props.children}</td>
    </tr>
  </row>
)