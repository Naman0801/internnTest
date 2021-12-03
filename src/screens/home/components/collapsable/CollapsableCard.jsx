import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import './CollapsableCard.css';
// Icons
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'


const CollapsableCard = ({ open }) => {
    const [open_state, setOpen] = useState(false);

  return (
        <Collapsible
            trigger={
                <div>
                    <p>Velit venenatis pretium mattis consectetur massa pretium mattis ?</p>
                    {open_state ? <BiChevronUp /> : <BiChevronDown />}
                </div>
            }
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
        >
        <p>
            Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.
        </p>
        </Collapsible>
  );
};

export default CollapsableCard;