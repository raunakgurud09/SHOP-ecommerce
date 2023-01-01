import socials from '../../../data/socials'
import Signature from '../../Icons/Signature'
import Container from '../Layouts/Container'

const footer = [
  {
    heading: 'Socials',
    options: [
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Github',
      },
      {
        url: 'https://instagram.com/raunak_gurud',
        name: 'Instagram',
      },
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Linkedin',
      },
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Twitter',
      },
      {
        url: 'raunakgurud2121@gmail.com',
        name: 'Mail',
      },
      {
        url: 'https://raunakgurud.hashnode.dev',
        name: 'Hashnode',
      },
    ],
  },

  {
    heading: 'Random',
    options: [
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Source code',
      },
      {
        url: '/sitemap.xml',
        name: 'Sitemap',
      },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex mt-12 py-6 justify-evenly items-center text-sm text-400">
      <div className="container flex-row py-4 sm:flex justify-between">
        <div className="flex flex-col justify-start ">
          <Signature />
          <p>&#169; {year} Raunak Gurud</p>
          <div className="flex space-x-4 text-300 p-2 items-center">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-4 hover:text-primary-500"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex space-x-5">
          {footer.map(({ heading, options }) => (
            <div className="w-fit" key={heading}>
              <h4 className="font-bold text-md py-[2px]">{heading}</h4>
              <ul className="text-xs">
                {options.map((option) => (
                  <a
                    href={option.url}
                    key={option.name}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-100 opacity-70"
                    aria-label={option.name}
                  >
                    <li className="py-[2px]">{option.name}</li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
