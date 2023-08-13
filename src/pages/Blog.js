import classes from './Blog.module.css';

const DUMMY_BLOG = [
    {
        id: 'b1',
        title: 'Spider-man',
        image:'https://assetsio.reedpopcdn.com/Spider-Banner_AVVWjOb.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
        description: 'After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy'
    },
    {
        id: 'b2',
        title: 'Avengers',
        image:  'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
        description: 'The Avengers is a superhero adventure in which many of Marvels major characters -- including Iron Man (Robert Downey Jr.), Captain America (Chris Evans), Thor (Chris Hemsworth), and Black Widow (Scarlett Johansson) -- come together to battle an otherworldly enemy in a war to the end.'
    },
    {
        id: 'b3',
        title: 'Star-wars',
        image:  'https://media.timeout.com/images/105863223/image.jpg',
        description: 'A space opera set “a long time ago in a galaxy far, far away,” the film centres on Luke Skywalker (played by the then relatively unknown Mark Hamill), a young man who finds himself embroiled in an interplanetary war between an authoritarian empire and rebel forces.'
    }
]

function BlogPage() {
    return (
        <div className={classes.events}>
        <h1>Movie Blogs</h1>
        <ul className={classes.list}> 
          {DUMMY_BLOG.map((blog) => (
            <li key={blog.id} className={classes.item}>
                <span>
                <img src={blog.image} alt={blog.title} />
                <div className={classes.content}>
                  <h2>{blog.title}</h2>
                  <h4>{blog.description}</h4>
                </div>
                </span>
            </li>
          ))}
        </ul>    
      </div>
    );
  }
  
  export default BlogPage;
  