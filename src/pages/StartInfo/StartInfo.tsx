import styles from "./styles.module.scss";
import { navigation, SystemPart, systemsTest } from "./constants";
import HouseModel from "../../components/StartInfo/HouseModel";
import { useCallback, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { List, ListItem, ListItemText } from "@mui/material";
import { Header } from "../../layout/Header";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const StartInfo = () => {
  const [visibility, setVisibility] = useState<{ [key: string]: boolean }>({
    partConcreteModel: true,
    partSystem1: true,
    partSystem2: true,
    partSystem3: true,
    partSystemOt0her: true,
  });
  //const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  //const open = useMemo(() => Boolean(anchor), [anchor]);

  const toggleVisibility = useCallback((partName: any) => {
    setVisibility((prevVisibility: any) => ({
      ...prevVisibility,
      [partName]: !prevVisibility[partName],
    }));
  }, []);

  const isolatePart = (partName: string) => {
    setVisibility((prevState) => {
      const isIsolated =
        prevState[partName] &&
        Object.keys(prevState).every((key) => (key === partName ? true : !prevState[key]));

      if (isIsolated) {
        return Object.keys(prevState).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {} as { [key: string]: boolean });
      } else {
        return {
          ...Object.keys(prevState).reduce((acc, key) => {
            acc[key] = false;
            return acc;
          }, {} as { [key: string]: boolean }),
          [partName]: true,
        };
      }
    });
  };

  //Object.entries(systemsTest).map(([key, value]) => {
  //  console.log(key, value);
  //});
  //  <FormControlLabel
  //  control={
  //    <Checkbox
  //      size="small"
  //      id={system.id}
  //      onChange={() => toggleVisibility(system.id)}
  //      className={styles.checkbox}
  //      checked={visibility[system.id]}
  //    />
  //  }
  //  label={system.name}
  ///>

  //const hoverOnItemList = (event: React.MouseEvent<HTMLElement>) => {
  //  setAnchor(event.currentTarget);
  //};

  return (
    <>
      <Header navigation={navigation} />
      <div className={styles.content}>
        <div>
          <div>
            <h1 className={styles.title}>House Model</h1>
            <p className={styles.description}>Click on the parts of the house to hide detail</p>
          </div>
          <div>
            <h2 className={styles.subtitle}>House Parts</h2>
            <List className={styles.parts}>
              {Object.entries(systemsTest).map(([key, system]) => (
                <div key={key}>
                  <ListItem>{capitalizeFirstLetter(key)}:</ListItem>
                  <ListItem className={styles.listContainer}>
                    {system.map((part: SystemPart) => {
                      return (
                        <>
                          <Tooltip
                            title={
                              <List>
                                <ListItem
                                  className={styles.cursor}
                                  onClick={() => isolatePart(part.id)}>
                                  <ListItemText>Isolate</ListItemText>
                                </ListItem>
                                <ListItem
                                  className={styles.cursor}
                                  onClick={() => toggleVisibility(part.id)}>
                                  <ListItemText>Hide</ListItemText>
                                </ListItem>
                                <ListItem className={styles.cursor}>
                                  <ListItemText>Look in</ListItemText>
                                </ListItem>
                              </List>
                            }
                            placement="right">
                            <ListItem>
                              <ListItemText className={styles.listItemText} primary={part.name} />
                            </ListItem>
                          </Tooltip>
                        </>
                      );
                    })}
                  </ListItem>
                </div>
              ))}
            </List>
          </div>
        </div>
        <HouseModel visibility={visibility} />
        {/*<ModelViewer />*/}
      </div>
    </>
  );
};

//const ModelViewer = () => {
//  const iframeRef = useRef<HTMLIFrameElement>(null);

//  useEffect(() => {
//    if (iframeRef.current) {
//      iframeRef.current.setAttribute("webkitallowfullscreen", "true");
//      iframeRef.current.setAttribute("mozallowfullscreen", "true");
//    }
//  }, []);

//  return (
//    <iframe
//      ref={iframeRef}
//      src="https://gmail4269801.autodesk360.com/shares/public/SH286ddQT78850c0d8a40737716cede3e81a?mode=embed"
//      width="100%"
//      height="100%"
//      allowFullScreen={true}
//      frameBorder="0"></iframe>
//  );
//};

export default StartInfo;
