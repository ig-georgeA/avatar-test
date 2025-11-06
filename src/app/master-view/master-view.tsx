import { IgrAvatar } from 'igniteui-react';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MasterView() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout master-view-container")}>
        <IgrAvatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" shape="rounded" className={classes("avatar")}></IgrAvatar>
        <IgrAvatar src="/src/assets/53c4f9a7b7f5f730460a0235b717b99679251327.png" className={classes("avatar_1")}></IgrAvatar>
        <IgrAvatar src="/src/assets/ceea5c02d8631fb2d407adbd35995d9facbf056f.png" shape="rounded" className={classes("avatar_2")}></IgrAvatar>
      </div>
    </>
  );
}
