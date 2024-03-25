import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="flex justify-center items-center h-16 bg-black text-white">
            <p>© 2024 Namo</p>
        </div>
        <div className="flex justify-center items-center h-16 bg-black text-white">
            <Link href="https://github.com/daemon-reconfig">
                Built with ❤️ by Daemon
            </Link>
        </div>
    </footer>
  )
}

export default Footer