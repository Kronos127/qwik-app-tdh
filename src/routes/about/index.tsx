import { component$, useStyles$ } from "@builder.io/qwik";
import globalstyles from '../../global.css?inline';

export default component$(() => {
    useStyles$(globalstyles)
   
    return(
        <article>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, placeat? Minus inventore repellendus debitis, ullam eligendi mollitia unde quae deleniti, blanditiis iusto facilis accusamus accusantium dignissimos quod odio similique nostrum.</p>
            <h2>Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid perferendis, molestiae accusantium eaque unde reiciendis quos laborum porro non! Cum porro, ipsam pariatur neque qui odio provident sed libero.</p>

        </article>)
})