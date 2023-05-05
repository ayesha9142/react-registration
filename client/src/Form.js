import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import Axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    age: yup.string().required("This is Required"),
    sex: yup.string().required("Sex is required"),
    iDtype: yup.string(),
    iD: yup.string().when('iDtype', {
        is: 'Aadhar',
        then: (schema) => schema.min(12),
        otherwise: (schema) => schema.min(10),
      }),
    phone: yup.string().min(10).max(10).required("Please Enter a valid 10 digit mobile number"),
    mobile: yup.string().min(10).max(10).required("Please Enter a valid 10 digit mobile number"),
});

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const [uname, setUname] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [mobile, setMobile] = useState("");
    const [idtype, setIdtype] = useState("");
    const [id, setId] = useState("");
    const [guardianlabel, setGuardianlabel] = useState("");
    const [guardian, setGuardian] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [occupation, setOccupation] = useState("");
    const [religion, setReligion] = useState("");
    const [mstatus, setMstatus] = useState("");
    const [blood, setBlood] = useState("");
    const [nationality, setNationality] = useState("");

    const onSubmitHandler = (data) => {
        alert(JSON.stringify(data));
        navigate('/home');
    };

    const submit = () => {
        Axios.post("http://localhost:5000/test", {
            uname: uname,
            age: age,
            sex: sex,
            mobile: mobile,
            idtype: idtype,
            id: id,
            guardianlabel: guardianlabel,
            guardian: guardian,
            email: email,
            phone: phone,
            address: address,
            state: state,
            city: city,
            country: country,
            pincode: pincode,
            occupation: occupation,
            religion: religion,
            mstatus: mstatus,
            blood: blood,
            nationality: nationality,
        }).then((res) => {
            console.log(res);
        });
    };
    return (
        <div className="Form">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Container>
                    <Row>
                        <h4>Personal Details</h4>
                        {/* Name */}
                        <Col>
                            <label>Name<span>*</span></label>
                            <input {...register("name")} type="text" placeholder="name"
                                value={uname} onChange={(e) => setUname(e.target.value)} />
                            <p>{errors.name?.message}</p>
                        </Col>
                        <Col xs={4}>
                            {/* DOB/Age */}
                            <label>Date of birth or <br /> Age<span>*</span></label>
                            <input
                                {...register("age")}
                                type="text"
                                placeholder="DD/MM/YYYY or Age in Years"
                                value={age} onChange={(e) => setAge(e.target.value)}
                            />
                            <p>{errors.age?.message}</p>
                        </Col>
                        <Col >
                            {/* Sex */}
                            <label>Sex <span>*</span></label>
                            <select {...register("sex")} placeholder="Enter Sex" defaultValue=""
                                value={sex} onChange={(e) => setSex(e.target.value)}>
                                <option value="" disabled>
                                    Enter Sex
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            <p>{errors.sex?.message}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* Mobile */}
                            <label>Mobile</label>
                            <input {...register("mobile")} placeholder="Enter Mobile" type="text"
                                value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            <p>{errors.mobile?.message}</p>
                        </Col>
                        <Col xs={8}>
                            {/* ID */}
                            <label>Govt Issued ID</label>
                            <select {...register("iDtype")} defaultValue="" className="sel"
                                value={idtype} onChange={(e) => setIdtype(e.target.value)}>
                                <option value="" disabled>
                                    ID Type
                                </option>
                                <option value="Aadhar">Aadhar</option>
                                <option value="PAN">PAN</option>
                            </select>
                            <input {...register("iD")} type="text" placeholder="ID" name="iD"
                                value={id} onChange={(e) => setId(e.target.value)} />
                            <p>{errors.iD?.message}</p>

                        </Col>
                    </Row>
                    <Row>
                        <h4>Contact Details</h4>
                        <Col>
                            {/* Guardian */}
                            <label>Guardian <br />Detail</label>
                            <select defaultValue="" className="sel"
                                value={guardianlabel} onChange={(e) => setGuardianlabel(e.target.value)}>
                                <option value="" disabled>Enter Label</option>
                                <option value="Aadhar">Mr.</option>
                                <option value="PAN">Mrs.</option>
                            </select>
                            <input type="text"
                                value={guardian} onChange={(e) => setGuardian(e.target.value)} />
                        </Col>
                        <Col>
                            {/* Email */}
                            <label>Email</label>
                            <input {...register("email")} placeholder="email" type="email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Col>
                        <Col>
                            {/* Emergency Contact */}
                            <label>Emergency <br />Contact Number</label>
                            <input {...register("phone")} placeholder="Enter Emergency No" type="text"
                                value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <p>{errors.phone?.message}</p>
                        </Col>
                    </Row>
                    <Row>
                        <h4>Address Details</h4>
                        <Col>
                            {/* Address */}
                            <label>Address</label>
                            <input placeholder="Enter Address" type="text"
                                value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Col>
                        <Col>
                            <label>State</label>
                            <input type="text"
                                value={state} onChange={(e) => setState(e.target.value)} />
                        </Col>
                        <Col>
                            <label>City</label>
                            <input type="text"
                                value={city} onChange={(e) => setCity(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Country</label>
                            <input type="text" defaultValue="India"
                                value={country} onChange={(e) => setCountry(e.target.value)} />
                        </Col>
                        <Col xs={8}>
                            <label>Pincode</label>
                            <input type="text"
                                value={pincode} onChange={(e) => setPincode(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <h4>Other Details</h4>
                        <Col>
                            <label>Occupation</label>
                            <input placeholder="Enter Occupation" type="text"
                                value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                        </Col>
                        <Col>
                            <label>Religion</label>
                            <select defaultValue="" value={religion} onChange={(e) => setReligion(e.target.value)}>
                                <option value="" disabled>Enter Religion</option>
                                <option value="">Hinduism</option>
                                <option value="">Islam</option>
                                <option value="">Christianity</option>
                                <option value="">Sikhism</option>
                                <option value="">Buddhism</option>
                                <option value="">Jainism</option>
                            </select>
                        </Col>
                        <Col>
                            <label>Marital Status</label>
                            <select defaultValue=""
                                value={mstatus} onChange={(e) => setMstatus(e.target.value)}>
                                <option value="" disabled>Enter Status</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                            </select>
                        </Col>
                        <Col>
                            <label>Blood Group</label>
                            <select defaultValue=""
                                value={blood} onChange={(e) => setBlood(e.target.value)}>
                                <option value="" disabled>Enter Blood Group</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="AB">AB</option>
                                <option value="O">O</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Nationality</label>
                            <input type="text" defaultValue="India"
                                value={nationality} onChange={(e) => setNationality(e.target.value)} />
                        </Col>
                    </Row>
                </Container>
                <button type="submit" onClick={submit}>SUBMIT <br /> ⌘S</button>
                <input type="reset" value="Reset Form (ESC)" />
                <br></br>
                <br></br>
            </form>
        </div>
    );
};

export default Form;