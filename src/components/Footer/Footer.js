import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t p-4 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} goRMG ERP. All rights reserved.
    </footer>
  );
}

export default Footer