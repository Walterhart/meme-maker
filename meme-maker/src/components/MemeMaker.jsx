import styles from "../styles/page.module.css"
const MemeMaker = () => {
    return (  

        <form className= {`${styles.form} wrapper`}>
            <input className= {styles.formInput} id="formInput" name="topText" type="text"/>
            <input className= {styles.formInput} id="formInput" name="bottomText" type="text"/>
            <button className= {`${styles.formColumn} formButton`}> Fetch a image</button>
        </form>
    );
}
 
export default MemeMaker;