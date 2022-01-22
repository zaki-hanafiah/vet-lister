import { Collapse } from 'antd'
import * as React from 'react'

const MapsEmbedder = ({ address }: TMapsEmbedder) => {
    const MapsGenerator = (address: string) =>
        `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=${encodeURIComponent(
            address
        )}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google map code for website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>`
    const { Panel } = Collapse
    return (
        <Collapse>
            <Panel header={address} key="1">
                <div
                    dangerouslySetInnerHTML={{ __html: MapsGenerator(address) }}
                />
            </Panel>
        </Collapse>
    )
}

type TMapsEmbedder = {
    address: string
}

export default MapsEmbedder
