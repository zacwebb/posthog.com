import Slider from 'components/Slider'
import React, { useState } from 'react'
import { Link } from 'react-scroll'

const menuItems: { label: string; id: string }[] = [
    {
        label: 'Features',
        id: 'features',
    },
    {
        label: 'Pricing',
        id: 'pricing',
    },
    {
        label: 'PostHog vs...',
        id: 'posthog-vs',
    },
    { label: 'Tutorials', id: 'tutorials' },
    { label: 'Installation', id: 'installation' },
    { label: 'Docs', id: 'docs' },
    { label: 'Meet the team', id: 'team' },
    { label: 'Roadmap & changelog', id: 'roadmap' },
    { label: 'Questions', id: 'questions' },
]

export const SmoothScroll = ({ exclude = [] }): JSX.Element => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div className="hidden md:block sticky top-[-1px] reasonable:top-[107px] z-50 bg-accent dark:bg-accent-dark mb-12">
            <section>
                <Slider className="list-none flex gap-4 pt-1 ![justify-content:_safe_center] border-t border-border dark:border-dark">
                    {menuItems
                        .filter(({ label }) => !exclude.includes(label))
                        .map(({ label, id }, index) => {
                            return (
                                <Link
                                    key={id}
                                    offset={-169}
                                    className={`!text-inherit whitespace-nowrap inline-block text-sm py-2 px-3 border border-transparent border-b-transparent text-opacity-60 hover:border hover:border-light hover:dark:border-dark hover:bg-light hover:dark:bg-dark hover:rounded-tl-sm hover:rounded-tr-md cursor-pointer ${
                                        index === activeTab
                                            ? '!border-border dark:!border-dark !border-b-bg-light !dark:border-b-bg-dark font-bold bg-light dark:bg-dark rounded-tl-sm rounded-tr-md'
                                            : ''
                                    }`}
                                    smooth
                                    duration={300}
                                    to={id}
                                    hashSpy
                                    spy
                                    onSetActive={() => setActiveTab(index)}
                                >
                                    {label}
                                </Link>
                            )
                        })}
                </Slider>
                <div className="w-full border-t border-border dark:border-dark -mt-px" />
            </section>
        </div>
    )
}
