'use client'

import { FormEvent } from 'react';
import {createdTodo} from './actions'

export function DemoFrom(params:any) {
    return(
        <div>
            <h1>Hello this is form</h1>
            <form action={createdTodo} className=' flex flex-col gap-2 '>
                <input
                className=' bg-white text-slate-900 rounded-sm'
                    name='name'
                    placeholder='name'
                    required
                />
                <input
                className=' bg-white text-slate-900 rounded-sm'
                    name='price'
                    placeholder='price'
                    required
                />
                <input
                className=' bg-white text-slate-900 rounded-sm'
                    name='des'
                    placeholder='des'
                    required
                />
                <button type='submit' className='w-full text-slate-900 bg-emerald-400'>Submit</button>
            </form>
        </div>
    )
    
}