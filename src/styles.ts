import { StandardLonghandProperties } from 'csstype';

const styles = {
  mainContainer: {
    // h-full max-h-full
    height: '100%',
    maxHeight: 'calc((100% - 3.5rem) - 1rem)',
  } as StandardLonghandProperties,

  weatherCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '1rem',
    color: 'white',
    // gap 6
    gap: '1.5rem',
  } as StandardLonghandProperties,

  weatherContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    gap: '0.5rem',
  } as StandardLonghandProperties,

  weatherImage: {
    height: '4rem',
  },

  weatherTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  } as StandardLonghandProperties,

  weatherText1: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 'bold',
  } as StandardLonghandProperties,

  weatherText2: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  } as StandardLonghandProperties,
};

export default styles;

/* Created by Whitigol Web Design */
