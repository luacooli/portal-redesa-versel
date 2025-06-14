import Link from 'next/link'

function Logo() {
  return (
    <div className='mt-8'>
      <Link href="/" className="inline-flex justify-center items-center">
        <img src="/images/logo/logo_HORIZONTAL.png" alt="Logo Rede SA" width={210} />
      </Link>
    </div>
  )
}

export function Header() {
  return (
    <header className="p-8 flex justify-center">
      <Logo />
    </header>
  )
}

