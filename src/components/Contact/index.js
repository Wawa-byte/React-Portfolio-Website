import './index.scss'

const Contact = () => {
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        CONTACT ME
                    </h1>

                    <p>COntact stuff goes here</p>

                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='Name'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='Name'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <Input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact