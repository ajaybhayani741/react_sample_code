import React, { Fragment, useState } from 'react'
import { Nav, TabContent, TabPane, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

const NavTabs = ({ tabList, title, tabContentClassName, titleClassName, navItemClassName, ...props}) => {
    const search = useSelector(state => state.search);
    const activeTabIndex = search.activeTab === '' ? 0 : search.activeTab;
    const [activeTab, setActiveTab] = useState({ tab: activeTabIndex, RenderComponent: tabList[activeTabIndex].component });
    const toggle = (RenderComponent, tab) => {
        if (activeTab !== tab) {
            setActiveTab({ tab, RenderComponent })
        }
    }
    const { tab, RenderComponent } = activeTab;
    // console.log('render component', RenderComponent)

    return (
        <Fragment>
            <Nav {...props}>
                {title && <div className="row mb-2 mt-4 pl-sm-0 pl-2">
                    <div className={`${titleClassName ? titleClassName : ''} 'col-sm-12'`}>
                        {title}
                    </div>
                </div>}
                {tabList.map(({ name, component, ...restProps }, index) => {
                    return (
                        <NavItem className={navItemClassName ? navItemClassName : ''} key={index}>
                            <NavLink
                                className={classnames({ active: tab === index })}
                                onClick={() => { toggle(component, index); }}
                            >
                                {restProps.icon && <img src={restProps.icon} className="menu-img" alt={`${name} icon`} />}
                                {name}
                            </NavLink>
                        </NavItem>
                    )
                })}
            </Nav>
            <TabContent activeTab={tab} className={tabContentClassName ? tabContentClassName : ''}>
                <TabPane tabId={tab}>
                    <RenderComponent />
                </TabPane>
            </TabContent>
        </Fragment>
    )
}

export default NavTabs
