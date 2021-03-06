import { Button, createMuiTheme } from '@material-ui/core';
import React from 'react';

const palette = {
    primary: { dark: 'rgba(0, 50, 116, 0.82)', main: '#025EA1', light: 'rgba(47, 128, 237, 0.1)' },
    secondary: { main: '#EE7233', light: '#4FC883' },
    info: { main: '#2F80ED', light: '#EAF2FD' },
    error: { dark: '#EB5757', main: 'rgba(235, 87, 87, .82)', light: 'rgba(235, 87, 87, .1)'},
    warning: { dark: '#F2994A', main: 'rgba(242, 153, 74, .82)', light: 'rgba(242, 153, 74, .1)' },
    success: { dark: '#27AE60', main: 'rgba(39, 174, 96, .82)', light: 'rgba(39, 174, 96, .1)' },
};

export const theme = createMuiTheme({
    palette,
    typography: {
        fontFamily: 'Roboto',
        h1: {
            fontFamily: 'Fira Sans',
            fontSize: '32px',
            lineHeight: '32px',
            fontWeight: '700',
            margin: '36px 0 16px',
            letterSpacing: '.4px'
        },
        h3: {
            fontFamily: 'Fira Sans',
            fontSize: '18px',
            lineHeight: '18px',
            fontWeight: '700',
            margin: '8px 0 12px',
            letterSpacing: '.4px'
        },
        h6: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '500'
        },
        subtitle1: {
            fontSize: '14px',
            fontWeight: '700',
            color: '#4f4f4f'
        }
    },
    overrides: {
        MuiContainer: {
            root: {
                padding: '0 20px',
                overflowX: 'hidden',
                '@global': {
                    '*': {
                        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
                    },
                },
            },
            maxWidthLg: {
                '@media (min-width: 1406px)': {
                    maxWidth: '1366px',
                }
            }
        },
        MuiGrid: {
            container: {
                alignItems: 'flex-start'
            }
        },
        MuiLink: {},
        MuiFormLabel: {
            root: {
                color: '#000',
                textTransform: 'uppercase',
                fontFamily: 'Fira Sans',
                fontSize: '14px',
                lineHeight: '14px',
                fontWeight: '400',
                margin: '24px 0 8px',
                letterSpacing: '.4px'
            }
        },
        MuiInput: {
            formControl: {
                margin: '0!important',
                borderRadius: '4px',
                border: 'none',
                background: '#f2f2f2',
                color: '#000',
                padding: '20px 24px',
                '&:before': {
                    display: 'none'
                },
                '&:after': {
                    display: 'none'
                }
            }
        },
        MuiInputBase: {
            input: {
                padding: 0,
                fontSize: '16px',
                lineHeight: '24px',
                fontFamily: 'Open Sans',
                letterSpacing: '.15px',
            }
        },
        MuiMenuItem: {
            root: {
                padding: '12px 24px',
                fontSize: '16px',
                lineHeight: '24px',
                fontFamily: 'Open Sans',
                letterSpacing: '.15px',
            }
        },
        MuiButton: {
            root: {
                border: 'none',
                borderRadius: '4px',
                padding: '20px 24px',
                fontSize: '16px',
                lineHeight: '16px',
                fontFamily: 'Open Sans',
                fontWeight: '700',
                boxShadow: 'none',
                outline: 'none',

                '&.rounded': {
                    borderRadius: "50%!important",
                    width: '64px',
                    height: '64px',
                },
            },
            text: {
                border: 'none',
                borderRadius: '4px',
                padding: '12px 28px 12px 21px',
                fontSize: '16px',
                lineHeight: '16px',
                fontFamily: 'Open Sans',
                fontWeight: '400',
                boxShadow: 'none',
                outline: 'none',
                textTransform: 'capitalize',
                '& svg': {
                  transform: 'rotate(-90deg)',
                    marginRight: '13px'
                },
                '&.outlined': {
                    backgroundColor: palette.primary.light,
                    color: palette.primary.main,
                    textTransform: 'none',
                    margin: '16px 16px 0 0',
                    '&:hover': {
                        color: '#fff',
                        backgroundColor: palette.primary.dark
                    }
                },
                '&.danger': {
                    backgroundColor: palette.error.light,
                    color: palette.error.dark,
                    '&:hover': {
                        backgroundColor: palette.error.main,
                        color: '#fff',
                    },
                    '&.selected': {
                        backgroundColor: palette.error.dark,
                        color: '#fff',
                    }
                },
                '&.error': {
                    backgroundColor: palette.error.light,
                    color: palette.error.dark,
                    '&:hover': {
                        backgroundColor: palette.error.main,
                        color: '#fff',
                    },
                    '&.selected': {
                        backgroundColor: palette.error.dark,
                        color: '#fff',
                    }
                },
                '&.warning': {
                    backgroundColor: palette.warning.light,
                    color: palette.warning.dark,
                    '&:hover': {
                        backgroundColor: palette.warning.main,
                        color: '#fff',
                    },
                    '&.selected': {
                        backgroundColor: palette.warning.dark,
                        color: '#fff',
                    }
                },
                '&.success': {
                    backgroundColor: palette.success.light,
                    color: palette.success.dark,
                    '&:hover': {
                        backgroundColor: palette.success.main,
                        color: '#fff',
                    },
                    '&.selected': {
                        backgroundColor: palette.success.dark,
                        color: '#fff',
                    }
                }
            },
            outlined: {
                border: 'none',
                padding: '20px 24px',
                backgroundColor: palette.primary.light,
                color: palette.primary.main
            },
            contained: {
                border: 'none',
                backgroundColor: palette.primary.main,
                color: '#fff',
                boxShadow: 'none!important',
                '&:hover': {
                    backgroundColor: palette.primary.dark
                }
            }
        },

        MuiPaper: {
            'elevation1': {
                borderRadius: '0px',
                boxShadow: 'none',
                padding: '0 32px 32px',
                maxWidth: '906px',
                '&.card': {
                    padding: '16px 20px',
                    borderBottom: '1px solid #e5e5e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '&.danger': {
                        border: '1px solid '+palette.error.dark,
                        backgroundColor: '#FDEEEE',
                        '& h3': {
                            color: palette.error.dark
                        }
                    },
                    '& .priority': {
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        marginRight: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&.danger': {
                            color: '#fff',
                            backgroundColor: palette.error.dark
                        },
                        '&.error': {
                            color: palette.error.dark,
                            backgroundColor: palette.error.light
                        },
                        '&.warning': {
                            color: palette.warning.dark,
                            backgroundColor: palette.warning.light
                        },
                        '&.success': {
                            color: palette.success.dark,
                            backgroundColor: palette.success.light
                        }
                    },
                    '& .status': {
                        borderRadius: '4px',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        padding: '12px 16px',
                        fontSize: '14px',
                        lineHeight: '16px',
                        whiteSpace: 'nowrap',
                        '&.danger': {
                            color: '#fff',
                            backgroundColor: palette.error.dark
                        },
                        '&.error': {
                            color: palette.error.dark,
                            backgroundColor: palette.error.light
                        },
                        '&.warning': {
                            color: palette.warning.dark,
                            backgroundColor: palette.warning.light
                        },
                        '&.success': {
                            color: palette.success.dark,
                            backgroundColor: palette.success.light
                        },
                        '&.info': {
                            color: palette.info.main,
                            backgroundColor: palette.info.light
                        }
                    }
                }
            }
        },
    },
});
