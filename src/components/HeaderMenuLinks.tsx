import Link from 'next/link'

import { MenuLink } from '@/interface/global'

type Props = {
  menuLinks: Array<MenuLink>
  navClass: string
  ulClass: string
}

function HeaderMenuLinks({ menuLinks, navClass, ulClass }: Props) {
  return (
    <nav aria-label="Page Nav" className={navClass && navClass}>
      <ul className={ulClass && ulClass}>
        {menuLinks.map((menuLink, index, { length }) => {
          const isLast = index === length - 1

          return (
            <li key={menuLink.href} className={isLast ? 'lg:ml-auto' : ''}>
              <Link href={menuLink.href}>
                <a
                  className="block text-xs font-medium text-gray-900 hover:opacity-75 dark:text-white"
                  {...(menuLink.external && {
                    target: '_blank',
                    rel: 'noreferrer',
                  })}
                >
                  {menuLink.title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HeaderMenuLinks
