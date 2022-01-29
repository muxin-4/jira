import React, { useEffect, useState } from 'react';

export const SearchPanel = (props) => {
    const { users, param, setParam } = props;



    return <form action="">

        {/* setParam(Object.assign({ }, param, {name: evt.target.value})) */}
        <input
            type="text"
            value={param.value}
            onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}
        />
        <select
            value={param.personId}
            onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}
        >
            <option value={''}>负责人</option>
            {
                users.map(item => {
                    return <option key={item.id} value={item.id}>{item.name}</option>
                })
            }
        </select>
    </form>
}