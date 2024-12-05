This is a project designed for you to fork.

It features a page that displays all books,
a page that displays a single books details
a page to add a new book
and on the dynamic route, edit and delete buttons.


To complete this exercise, you'll need to set up a sql table in your postgres db of choice, and seed your data base


Create the table: 

```sql
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    quote TEXT,
    released DATE,
    img_url TEXT,
    hero_image TEXT
);
```

Some seed data:

```sql
INSERT INTO books (title, author, description, quote, released, img_url, hero_image)
VALUES
('The Sailor Who Fell from Grace with the Sea', 'Yukio Mishima', 'The Sailor Who Fell from Grace with the Sea tells the tale of a band of savage thirteen-year-old boys who reject the adult world as illusory, hypocritical and sentimental, and train themselves in a brutal callousness they call "objectivity." When the mother of one of them begins an affair with a ships officer, he and his friends idealize the man at first; but it is not long before they conclude that he is in fact soft and romantic. They regard their disappointment in him as an act of betrayal on his part, and react violently.', 'There`s a huge seal called `impossibility` pasted all over this world. And don`t ever forget that we`re the only ones who can tear it off once and for all.', '1963-11-01', 'https://m.media-amazon.com/images/I/81WtwCKh6tL.jpg', 'https://i.pinimg.com/originals/c3/e9/ae/c3e9ae40ff74ad7f734b380108550210.jpg'),
('Infinite Jest', 'David Foster Wallace', 
 'A sprawling, multi-narrative novel that delves into addiction, entertainment, and the human condition, set in a near-future dystopia.',
 'What passes for hip cynical transcendence of sentiment is really some kind of fear of being really human, since to be really human [...] is probably to be unavoidably sentimental and naïve and goo-prone and generally pathetic.”', 
 '1996-02-01', 
 'https://m.media-amazon.com/images/I/81z10gLCe4L.jpg', 
 'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus.jpg'),
('The Temple of the Golden Pavilion', 'Yukio Mishima', 
'Inspired by a real-life act of arson at Kyotos Kinkaku-ji, Yukio Mishima`s novel delves into the mind of a young Zen acolyte, Mizoguchi, whose obsession with the concept of beauty leads to destruction. Haunted by his own insecurities, a troubled upbringing, and a stutter that isolates him, Mizoguchi develops a complex relationship with the temple, culminating in an act of irreversible violence. The novel explores themes of desire, envy, and the transient nature of beauty through a poetic yet devastating narrative.', 
 'When people concentrate on the idea of beauty, they are, without realizing it, confronted with the darkest thoughts that exist in this world. That, I suppose, is how human beings are made.', 
 '1956-01-01', 
 'https://m.media-amazon.com/images/I/814qbYp0ZSL._AC_UF894,1000_QL80_.jpg', 
 'https://tricycle.org/wp-content/uploads/2019/12/golden-pavillion-1024x682.jpg'),

('We Need to Talk About Kevin', 'Lionel Shriver', 
 'Told through a series of letters from a mother to her estranged husband, "We Need to Talk About Kevin" examines the unraveling of a family in the aftermath of a school shooting committed by their son, Kevin. The novel paints a harrowing portrait of motherhood, guilt, and the chilling ambiguity of nature versus nurture. As Eva grapples with Kevin`s sociopathic tendencies and her own feelings of detachment, the narrative becomes an unflinching exploration of the dark undercurrents of familial relationships.',
 'To reject a child is to deny yourself the illusion that you are always a good person.', 
 '2003-04-14', 
 'https://d2wzqffx6hjwip.cloudfront.net/spree/images/attachments/000/062/575/original/9781921145087.jpg?1725924361', 
 NULL),

('Underland', 'Robert Macfarlane', 
 'Robert Macfarlane takes readers on an extraordinary journey beneath the earth`s surface, exploring ancient burial grounds, labyrinthine cave systems, and hidden rivers. "Underland" is a meditation on deep time, human history, and the profound interconnectedness of the natural world. Macfarlane`s lyrical prose and meticulous research illuminate the mysteries of the underworld, revealing both its beauty and its role as a repository for humanity`s greatest fears, hopes, and legacies.',
 'The way into the underland is through the riven trunk of an old ash tree, split by lightning long ago.', 
 '2019-05-02', 
 'https://m.media-amazon.com/images/I/91NjJoOymYL._AC_UF894,1000_QL80_.jpg', 
 'https://i.natgeofe.com/n/4117d4ce-b56f-4b7f-a9b0-2e2faa4475d5/3892182_4x3.jpg'),

('Journey to the End of the Night', 'Louis-Ferdinand Céline', 
 'Louis-Ferdinand Céline`s groundbreaking novel is a scathing critique of human folly, narrated by the misanthropic and deeply cynical Bardamu. The story takes readers from the trenches of World War I to the grimy streets of Paris, colonial Africa, and industrial America. With its dark humor, relentless pessimism, and vivid depictions of the absurdity of existence, "Journey to the End of the Night" remains one of the most influential and controversial novels of the 20th century.',
 'The greatest defeat, in anything, is to forget, and especially the things you shouldn’t have forgotten.', 
 '1932-10-01', 
 'https://cdn.sanity.io/images/p34gzxcg/production/e60bcdd68dc21a1127dffe9add4ef3f2f1b8254b-500x771.jpg?auto=format&w=1000&fit=scale', 
 'https://img.freepik.com/premium-vector/black-white-location-map-city-navigation_97886-12831.jpg'),

('Anathem', 'Neal Stephenson', 
 'A dense and philosophical science fiction epic about a secluded monastic society and their relationship with a technologically advanced world.',
 'Set in an alternate reality where monastic scholars devote themselves to pure thought and philosophy, "Anathem" follows Erasmus, a young monk-like figure, as he is drawn into a cosmic mystery that threatens his world. Neal Stephenson`s richly detailed narrative weaves together themes of science, metaphysics, and the clash between intellectualism and practicality. The novel challenges readers to consider profound questions about existence, knowledge, and the fabric of reality itself.
', 
 '2008-09-09', 
 'https://m.media-amazon.com/images/I/71QtAPC03PL._AC_UF894,1000_QL80_.jpg', 
 'https://images.squarespace-cdn.com/content/v1/5e39dd08227c00441c144d7b/1583542475946-GY5CZLS730ZW76NJNMN9/Anathem+Cover+Black+and+White.jpg'),

('Catch-22', 'Joseph Heller', 
 'Joseph Heller`s satirical masterpiece captures the absurdities of war through the eyes of Captain John Yossarian, a World War II bombardier caught in the eponymous bureaucratic paradox. Yossarian`s desperate attempts to escape the war reveal a world where logic is twisted, authority is arbitrary, and survival is a matter of chance. The novel`s biting humor and unrelenting critique of institutional insanity make it a timeless exploration of human resilience in the face of absurdity.',
 'There was only one catch and that was Catch-22, which specified that a concern for one`s own safety in the face of dangers that were real and immediate was the process of a rational mind.', 
 '1961-11-10', 
 'https://upload.wikimedia.org/wikipedia/commons/8/80/Catch-22_%281961%29_front_cover%2C_first_edition.jpg', 
 'https://flatheadbeacon.com/wp-content/uploads/2019/06/5plane.jpg'),

('The Dark Forest', 'Liu Cixin', 
 'The second book in the "Three-Body Problem" trilogy.',
 'The universe is a dark forest. Every civilization is an armed hunter stalking through the trees like a ghost, gently pushing aside branches that get in his way, trying to tread without sound.', 
 '2008-05-01', 
 'https://m.media-amazon.com/images/I/61LynSFf5BL._AC_UF894,1000_QL80_.jpg', 
 'https://www.freud.org.uk/wp-content/uploads/2022/02/JuanCholo-CC-BY-SA-4.0.jpeg'),

('Human Acts', 'Han Kang', 
 'A haunting and poetic exploration of the aftermath of the 1980 Gwangju Uprising in South Korea, told through interconnected stories of trauma and resilience. Through interconnected narratives, the novel explores the brutality of state violence and the resilience of the human spirit. Han`s haunting prose captures the lingering pain of trauma and the indomitable will to remember, weaving a tapestry of grief, memory, and solidarity.',
 'Your body, which once burst forth into a brilliant, blinding heat. Your body, which once knew the world as it lived, breathed, and throbbed.', 
 '2014-01-01', 
 'https://m.media-amazon.com/images/I/71B-JQRH10L._AC_UF894,1000_QL80_.jpg', 
 NULL),

('Night Watch', 'Terry Pratchett', 
 'A novel from the "Discworld" series, blending time travel, crime, and revolution as Sam Vimes gets sent back to his own past to solve a mystery.',
 '“I comma square bracket recruit`s name square bracket comma do solemnly swear by square bracket recruit`s deity of choice square bracket to uphold the Laws and Ordinances of the City of Ankh-Morpork comma serve the public truƒt comma and defend the ƒubjects of his ƒtroke her bracket delete whichever is inappropriate bracket Majeƒty bracket name of reigning monarch bracket without fear comma favour comma or thought of perƒonal ƒafety semi-colon to purƒue evildoers and protect the innocent comma comma laying down my life if neceƒsary in the cauƒe of said duty comma so help me bracket aforeƒaid deity bracket full stop Gods Save the King stroke Queen bracket delete whichever is inappropriate bracket full stop.', 
 '2002-11-12', 
 'https://m.media-amazon.com/images/I/61Emagc6wmL._AC_UF894,1000_QL80_.jpg', 
 NULL);
```

quickly add some new data (for testing)
```sql
INSERT INTO books (title, author, description, quote, released, img_url, hero_image)
VALUES
('some cool book2', 'Fooo!', 'this is a description', 'wow', '1963-11-01', 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png', 'https://i.pinimg.com/originals/c3/e9/ae/c3e9ae40ff74ad7f734b380108550210.jpg')
```


To finish this task, checkout the `db_utitls` file in the utils folder. This is were each of our server actions are stored - functions to read a single book, delete a book, create a book, and delete a book.

You'll need to finish writing each of the functions and use them as appropriate for the app. It's up to you to figure out the best way to put the blocks together, and get the functions the correct arguments. 

If you're up for it, I've made a harder version of this exercise on a branch called 'harder-v'

After forking the repo and pulling it locally, you can switch to it by doing 

`git checkout harder-v`
