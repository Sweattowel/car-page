const columns = [
    "Contact",
    "Company",
    "Local MarketPlaces",
    "Consent",
    "International MarketPlaces"
]

const rows = [
    {parent: 'Contact', content: 'Contact Us'},
    {parent: 'Contact', content: 'Help'},
    {parent: 'Company', content: 'About us'},
    {parent: 'Company', content: 'Careers'},
    {parent: 'Company', content: 'Corporate Advertising'},
    {parent: 'Company', content: 'Dealer Advertising'},
    {parent: 'Company', content: 'Shareholders'},
    {parent: 'Company', content: 'Competitions'},
    {parent: 'Company', content: 'Become a dealer'},
    {parent: 'Company', content: 'Sitemap'},
    {parent: 'Local MarketPlaces', content: 'Bikes'},
    {parent: 'Local MarketPlaces', content: 'Boats'},
    {parent: 'Local MarketPlaces', content: 'Trucks'},
    {parent: 'Local MarketPlaces', content: 'Caravans'},
    {parent: 'Local MarketPlaces', content: 'Farm Machinery'},
    {parent: 'Local MarketPlaces', content: 'Construction'},
    {parent: 'Local MarketPlaces', content: 'Tyresales'},
    {parent: 'Local MarketPlaces', content: 'RedBook'},
    {parent: 'Consent', content: 'Privacy'},
    {parent: 'Consent', content: 'Responsible disclosure'},
    {parent: 'Consent', content: 'Terms and Conditions'},
    {parent: 'International MarketPlaces', content: 'Chileautos'},
    {parent: 'International MarketPlaces', content: 'Webmotors'},
]

export default function Footer() {
    return (
        <main className="border-t border-b w-[90%] h-[70vh] flex text-[1rem]">
            <ul className="flex w-full justify-evenly items-center">
                {columns.map((column: string, index: number) => (
                    <li key={index} className=" text-left">
                        <h2 className="font-bold">
                            {column}
                        </h2>
                        <ul>
                            {rows.map((row: any, rowIndex: number) => row.parent == column && (
                                <li key={rowIndex} className="p-2">
                                    {row.content}    
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </main>
    )
}