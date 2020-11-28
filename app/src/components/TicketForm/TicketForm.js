import React, {useState, useEffect} from 'react'
import { Paper, Button, Select, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, TextareaAutosize, Input, MenuItem} from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import Microphone from './Microphone';

const initState = [
    {
        name: 'title',
        type: 'input',
        label: 'Задача',
        value: '',
        fullWidth: true
    },
    {
        name: 'type_id',
        type: 'select',
        label: 'Вид задачи',
        value: '',
        options: []
    },
    {
        name: 'deadline',
        type: 'input',
        label: 'Срок выполнения',
        value: ''
    },
    {
        name: 'priority_id',
        type: 'priority',
        label: 'Приоритет',
        value: 1,
        options: []
    },
    // {
    //     name: '',
    //     type: 'input',
    //     label: 'Исполнитель',
    //     value: '',
    //     fullWidth: true
    // },
    {
        name: 'description',
        type: 'textarea',
        label: 'Комментарий',
        value: '',
        fullWidth: true
    },
];

export default function TicketForm({}) {

    const [fields, setFields] = useState(initState);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+"/tickets/dictionaries")
            .then(res => res.json())
            .then(
                (result) => {
                    setFields(fields.map((field) => {
                        switch (field.name) {
                            case 'type_id':
                                return {
                                    ...field,
                                    options: result.types
                                };
                            case 'priority_id':
                                return {
                                    ...field,
                                    options: result.priorities
                                };
                            default:
                                return field;
                        }
                    }));
                },
                (error) => {
                    alert(error)
                }
            )
    }, []);

    const onChange = (name) => {
        return (e) => {
            setFields(fields.map((field) => {
                if (field.name === name) {
                    return {
                        ...field,
                        value: e.target.value
                    }
                }
                return field;
            }))
        }
    };

    const onSubmit = () => {
        let data = new FormData();
        fields.map((field) => {
            data.append(field.name, field.value)
        });

        fetch(process.env.REACT_APP_API_URL+"/tickets", {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(
                (result) => {

                },
                (error) => {
                    alert(error)
                }
            )
    };

    const getClass = (weight) => {
        if (weight < 15) {
            return "success";
        } else if (weight < 25) {
            return "warning";
        } else {
            return "danger"
        }
    };

    const renderField = (field) => {
        switch (field.type) {
            case 'select':
                return <Select value={field.value} onChange={onChange(field.name)}>
                    {field.options.map((option) => <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>)}
                </Select>;
            case 'textarea':
                return <TextareaAutosize value={field.value} onChange={onChange(field.name)} rows={2}/>;
            case 'priority':
                return <RadioGroup className="priority-btns" name={field.name}>
                    {field.options.map((option) => <FormControlLabel className="priority-btn" key={option.id} value={option.id} control={<Button onClick={() => onChange(field.name)({target: {value: option.id}})} className={getClass(option.weight)+(field.value === option.id ? " selected" : "")} ><ArrowRightAlt/>{option.title}</Button>} />)}
                </RadioGroup>;
            default:
                return <Input value={field.value} onChange={onChange(field.name)} fullWidth={field.fullWidth}/>;
        }
    };

    return <Paper>
        {fields.map((item) =>  <FormControl key={item.name} fullWidth={true}>
            <FormLabel>{item.label}</FormLabel>
            {item.fullWidth ? <div className="form-group">
                {renderField(item)}
                <Microphone/>
            </div> : <div className="form-group-half">{renderField(item)}</div>}
        </FormControl>)}
        <div className="form-buttons">
            <Button disableRipple variant="contained" onClick={onSubmit}>Поставить задачу</Button>
            <Button disableRipple variant="outlined">Сохранить как шаблон</Button>
        </div>

    </Paper>
}