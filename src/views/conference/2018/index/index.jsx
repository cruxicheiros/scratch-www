const FormattedDate = require('react-intl').FormattedDate;
const FormattedMessage = require('react-intl').FormattedMessage;
const React = require('react');
const render = require('../../../../lib/render.jsx');

const FlexRow = require('../../../../components/flex-row/flex-row.jsx');
const Page = require('../../../../components/page/conference/2018/page.jsx');
const TitleBanner = require('../../../../components/title-banner/title-banner.jsx');

require('../../../../components/forms/button.scss');
require('./index.scss');

const ConferenceSplash = () => (
    <div className="index mod-2018">
        <TitleBanner className="mod-conference mod-2018">
            <div className="title-banner-image mod-2018" />
            <h1 className="title-banner-h1 mod-2018">
                <center>
                    <FormattedMessage id="conference-2018.title" />
                    <br />
                    <FormattedMessage id="conference-2018.subtitle" />
                </center>
            </h1>
            <h3 className="title-banner-h3 mod-2018">
                <FormattedMessage id="conference-2018.dateDesc" />
            </h3>
        </TitleBanner>
        <div className="inner">
            <section className="conf2018-panel mod-desc">
                <p className="conf2018-panel-desc">
                    <FormattedMessage id="conference-2018.desc1" />
                    <br />
                    <br />
                    <FormattedMessage id="conference-2018.desc2" />
                </p>
                <table className="conf2018-panel-details">
                    <tbody>
                        <tr className="conf2018-panel-row">
                            <td className="conf2018-panel-row-icon">
                                <img
                                    alt="Calendar Icon"
                                    className="conf2018-panel-row-icon-image"
                                    src="/svgs/conference/index/calendar-icon.svg"
                                />
                            </td>
                            <td><FormattedMessage id="conference-2018.date" /></td>
                            <td>
                                <FormattedDate
                                    day="2-digit"
                                    month="long"
                                    value={new Date(2018, 6, 26)}
                                    year="numeric"
                                />
                                {' - '}
                                <FormattedDate
                                    day="2-digit"
                                    month="long"
                                    value={new Date(2018, 6, 28)}
                                    year="numeric"
                                />
                                <FormattedMessage id="conference-2018.dateDescMore" />
                            </td>
                        </tr>
                        <tr className="conf2018-panel-row">
                            <td className="conf2018-panel-row-icon">
                                <img
                                    alt="Map Icon"
                                    className="conf2018-panel-row-icon-image"
                                    src="/svgs/conference/index/map-icon.svg"
                                />
                            </td>
                            <td><FormattedMessage id="conference-2018.location" /></td>
                            <td><FormattedMessage id="conference-2018.locationDetails" /></td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <FormattedMessage id="conference-2018.registrationDate" />
                </p>
            </section>
            <section className="conf2018-panel">
                <p className="conf2018-panel-desc">
                    <FormattedMessage id="conference-2018.sessionDesc" />
                </p>
                <p className="conf2018-panel-session">
                    <p className="conf2018-panel-session">
                        <b>
                            <FormattedMessage id="conference-2018.sessionItem1Title" />
                        </b>{' '}
                        <FormattedMessage id="conference-2018.sessionItem1Desc" />
                    </p>
                    <p className="conf2018-panel-session">
                        <b>
                            <FormattedMessage id="conference-2018.sessionItem2Title" />
                        </b>{' '}
                        <FormattedMessage id="conference-2018.sessionItem2Desc" />
                    </p>
                    <p className="conf2018-panel-session">
                        <b>
                            <FormattedMessage id="conference-2018.sessionItem3Title" />
                        </b>{' '}
                        <FormattedMessage id="conference-2018.sessionItem3Desc" />
                    </p>
                    <p className="conf2018-panel-session">
                        <b>
                            <FormattedMessage id="conference-2018.sessionItem4Title" />
                        </b>{' '}
                        <FormattedMessage id="conference-2018.sessionItem4Desc" />
                    </p>
                    <p className="conf2018-panel-deadline">
                        <FormattedMessage id="conference-2018.deadline" />
                    </p>
                </p>
                <a
                    className="button mod-2018-panel"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd7SkuQ-dfW-P3aArSQokK9GkKAUKufTVBHod_ElNIiFE9iBQ/viewform?usp=sf_link"
                >
                    <FormattedMessage id="conference-2018.proposal" />
                </a>
            </section>
            <section className="conf2018-panel mod-registration">
                <FlexRow className="conf2018-panel-title">
                    <div className="conf2018-panel-title-text">
                        <h3><FormattedMessage id="conference-2018.registrationTitle" /></h3>
                    </div>
                </FlexRow>
                <p className="conf2018-panel-desc">
                    <FormattedMessage id="conference-2018.registrationEarly" />
                    <br />
                    <FormattedMessage id="conference-2018.registrationStandard" />
                </p>
            </section>
            <section className="conf2018-panel mod-questions">
                <p className="conf2018-panel-desc">
                    <FormattedMessage
                        id="conference-2018.questions"
                        values={{
                            emailLink: (
                                <a href="mailto:conference@scratch.mit.edu">
                                    conference@scratch.mit.edu
                                </a>
                            )
                        }}
                    />
                </p>
            </section>
        </div>
    </div>
);

render(<Page><ConferenceSplash /></Page>, document.getElementById('app'));
