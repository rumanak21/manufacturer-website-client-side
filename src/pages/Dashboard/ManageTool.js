import React from 'react';
import { toast } from 'react-toastify';

const ManageTool = ({ product, index }) => {
    const { name, available, picture, price } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={picture} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{available}</td>
            <td>
                <label for="delete-confirm-modal" className="btn btn-sm btn-accent">Delete</label>
            </td>
        </tr>
    );
};

export default ManageTool;