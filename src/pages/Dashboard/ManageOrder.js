import React from 'react';

const ManageOrder = ({ product, index, refetch }) => {
    const { name, phone, img, email, quantity, price } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{quantity}</td>
            <td>${quantity * price}</td>
            <td>
                <label htmlFor="delete-confirm-modal" className="btn btn-sm btn-accent">Delete</label>
            </td>
        </tr>
    );
};

export default ManageOrder;