import React, { ReactElement, useState, useEffect } from 'react';
import './DataView.scss';
import { Link } from 'react-router-dom';
import { getKillers } from '../../Services/generator/getDataApi';
import SquareIcon from '../../Atoms/SquareIcon/SquareIcon';
import Spinner from '../../Atoms/Spinner/Spinner';

const DataView = (): ReactElement => {

  const [killersDetails, setKillersDetails] = useState<any | null>(null);

  useEffect(() => {
    getKillers().then((response) => setKillersDetails(response.data));
  }, []);
  return (
    <div className="data-panel">
      { killersDetails
        ? killersDetails.map((killer: any) => <SquareIcon name={killer.name} icon={killer.icon} rank={null} />)
        : <Spinner />}
    </div>
  );
};

export default DataView;
