import React from 'react'

const Edition = () => {
    return (
        <section name="Edition" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Hobbies</h3>
                    <h2 className='text-3xl font-semibold mt-2'>These are some of my favorites.</h2>
                </div>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/ngot.png" alt="ngot" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Music Band - Ngọt</h4>
                        <p className='text-gray-400 text-md mt-2'>I've known them since 2014, but it wasn't until 2018 that I became a big fan of them. They are pioneers in the indie music movement in Vietnam with different music. Each of their songs has a different style that touches my soul</p>
                        <a href="https://open.spotify.com/artist/0V2DfUrZvBuUReS1LFo5ZI" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/kdb.webp" alt="kdb" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Football Player - Kevin De Bruyne</h4>
                        <p className='text-gray-400 text-md mt-2'>Kevin De Bruyne is a Belgian professional footballer widely regarded as one of the most gifted midfielders of his generation. De Bruyne's versatility, vision, and exceptional passing ability have made him a pivotal figure for both club and country. He has showcased his talents primarily for Manchester City in the English Premier League, where he consistently delivers impressive performances, contributing crucial goals and assists. De Bruyne's technical prowess, coupled with his intelligence on the field, enables him to dictate the pace of play and unlock defenses with precision passes.</p>
                        <a href="https://vi.wikipedia.org/wiki/Kevin_De_Bruyne" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>
            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/t1.png" alt="t1" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Video Games - League of Legends</h4>
                        <p className='text-gray-400 text-md mt-2'>Often abbreviated as LoL, is a highly popular multiplayer online battle arena (MOBA) game developed and published by Riot Games. In League of Legends, players assume the role of "champions" with unique abilities and strengths, engaging in strategic team-based combat against an opposing team. Matches take place on a variety of maps, with the primary objective typically being the destruction of the enemy team's base while defending one's own.</p>
                        <a href="https://www.leagueoflegends.com/vi-vn/" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/onepiece.png" alt="onepiece" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Anime - One Piece</h4>
                        <p className='text-gray-400 text-md mt-2'>"One Piece" is a wildly popular Japanese manga series created by Eiichiro Oda. It follows the adventures of Monkey D. Luffy and his diverse crew of pirates as they search for the legendary treasure known as One Piece. Set in a world of vast oceans and uncharted islands, the series is renowned for its rich world-building, compelling characters, and epic battles. With themes of friendship, freedom, and the pursuit of dreams, "One Piece" has captivated audiences worldwide for its intricate plotlines, emotional depth, and boundless imagination. As the Straw Hat Pirates journey across the Grand Line, they encounter formidable foes, forge unbreakable bonds, and uncover the mysteries of the world, making "One Piece" an enduring masterpiece in the realm of manga and anime.</p>
                        <a href="https://www.imdb.com/title/tt0388629/" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <div className='grid place-items-center'>
                    <a href="https://metamask.io/" target='_blank' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end max-w-max'>
                        <i className='bx bxl-bitcoin mr-2 text-2xl' ></i>
                        Donate for me
                    </a>
                </div>
            </section>
        </section>
    )
}

export default Edition
