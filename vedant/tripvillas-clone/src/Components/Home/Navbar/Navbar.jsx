import { Box,HStack, Image, Modal,ModalOverlay,ModalContent,ModalBody,useDisclosure,Button} from "@chakra-ui/react";
import { ArrowDownIcon, HamburgerIcon, PlusSquareIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import React from "react";
import { DrawerBody, DrawerCloseButton,Drawer,Divider,DrawerContent,DrawerOverlay,IconButton,Text } from "@chakra-ui/react";
 
export default function Navbar(){ 
    const { isOpen, onOpen, onClose } = useDisclosure()  

return(
    <>
    <Box sx={{ flexGrow: 1 }}>
        <HStack style={{ backgroundColor: "black" }} p="0.2rem" justifyContent={"space-between"}>
            <Link to={'/'}>
            <Image src='data:image/jpeg;base64,/9j/4QE0RXhpZgAASUkqAAgAAAAIABIBBAABAAAAAQAAABoBBQABAAAAbgAAABsBBQABAAAAdgAAACgBAwABAAAAAgAAADEBAgANAAAAfgAAADIBAgAUAAAAiwAAABMCAwABAAAAAQAAAGmHBAABAAAAnwAAAAAAAABgAAAAAQAAAGAAAAABAAAAU25hcHNlZWQgMi4wADIwMjI6MTI6MTYgMjM6NTc6MTIABwAAkAcABAAAADAyMzEBkQcABAAAAAECAwCGkgcAMwAAAPkAAAAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAEgBAAADoAQAAQAAAHcAAAAAAAAAQVNDSUkAAAB4cjpkOkRBRlVwdmtQWmd3Ojcsajo0MzU4NDA0MDIxMyx0OjIyMTIxMzE0/+AAEEpGSUYAAQEAAAEAAQAA/+EE7Gh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CiAgICAgICAgPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICAgICAgICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogICAgICAgIDxkYzp0aXRsZT4KICAgICAgICA8cmRmOkFsdD4KICAgICAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPmhvbGlkYXkgdmlsbGFzIC0gMTwvcmRmOmxpPgogICAgICAgIDwvcmRmOkFsdD4KICAgICAgICA8L2RjOnRpdGxlPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgICAgICAgPEF0dHJpYjpBZHM+CiAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjItMTItMTM8L0F0dHJpYjpDcmVhdGVkPgogICAgICAgIDxBdHRyaWI6RXh0SWQ+YmE3YTJlODAtZmQwNC00NWY2LWIwZDItOGY2ZDgzODJiMzMzPC9BdHRyaWI6RXh0SWQ+CiAgICAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgICAgICA8L3JkZjpsaT4KICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgPC9BdHRyaWI6QWRzPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgICAgICAgPHBkZjpBdXRob3I+VmVkYW50IERlc2htdWtoPC9wZGY6QXV0aG9yPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICAgIDwvcmRmOlJERj4KICAgICAgICA8L3g6eG1wbWV0YT7/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAB3AUgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8B6KKRmxQAtFMLMe9JyfWgB0nahQShwhOOpoSGaQZjiZhuC5C55PQfU4P5VvfD3w5ZeMvEun+E7/xTpWiJe3flHVNckeO0tywADSsiuVXrltuFyCTjonohSlGEHKWyRhokjp8q5A64psmTjLE8cZ7V9BfFT/gnB+2L8N3kYfBi+1uOIlZJfDM0ep5VSRu2QlpQuAGyVAww6GvDfE3hXxT4S1A6R4u8O6hpd3EMSWupWrwyJz0KOAR9DUxkmcWDzXLMfBfVqsZPqlJN6eSdzNqTIPQ0xFZzhBn6UpjkB2lDn0qzuHUUzY+7ZsOfTFAVidoU59MUAPyPWjIPQ01oZVbY0ZBxnBFJtYjIHFF0DTTsx9FM2P/AHT+VHlv/dNAD6KYVYAMVIBGQcdaAGGSAeOtAD6KafMA3EcUhLjrQA+imq2eDTqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooARuh+lMp7dD9KZQAUUUUASUx/vU+mMCWOBQAlOVWIGM8nHFJtbBbacDqcVZ0u0vdRu4dN020muLm5mWK3gt4y7ys52hVUDLMSQABzQGx0vwX+E/jj44fEPSvhR8OdGN9q2sXixWsb7hGg6vJI3RIkHzuxHAUetfpB8Wf8AgkF8CNR/Z20zwn4D12HRfF3hnTJJn8a6nKEs9WkwZJTegZMNvu5SUcxxsMiTBC9t/wAE4v2HLX9kr4df8JD4wsll+IHiSFTqk1uVZ9NtsE/YISf+WhG0yMOQWZDynHgn/BWv9uiGa4vP2SPhDq8JEeE8eapYTbV3IAP7LjkU4dBsQykH5mAj/hYUuh4FXFYjG4+MMO7QT1Jv+CZP7d9xdS2n7Lvxl1yIz2sgtfA+uXF6SiEthbF3QkMjHd5Z3MBuVF+VVA+2vEPhjw94w01NC8e+FtP1q2WRwun6/pUN1E0gJ3fLIh5HTO3dgdelfhNBOttcLLb3KxNEFKTpLhl9T8oz+H8I461+n/8AwTh/bni/aI8Lj4PfE/UVfxxptgVtruScA63bxKCpJJBM6JkNtBLCPceprF+6/I/CfFnw/wARgqs8/wAmTS0dSMW04v8AnVv/ACY7jx7/AME5v2NPiNDJLN8HoNFuJyS934Su5LNlGf4UaQw9c87W9NgwCfDfiD/wRK8GXUMlx8KfjtqVrIcmCy8TafFPGDknBnh2t6D/AFP4nOB9wqzOxbAYE/K4GC/bJH8JyCMe1IhWRRJG4ZT0YHIP+TSUlc/JMq8SeN8nSWHxkprtO0rffqflb4+/4JIftg+CQ9xomkaH4mtky2dD1hN568eXcCNicAdAeoxk5A8I+IHwU+MXwpmWP4l/CzxHoO85hk1XR5reNhkj5WdAGGc8rkV+5Q45ya5v4361qmj/AAF8fanp7zNJa+CtTlihRgwkYWsjLlHUj76pgqQ25gPSq5mfp3D/AI7ZzUxtHC42hCXPJRum4u7dvNHwr/wR2+H/AMJ/HsPxBh+KHwr8PeIZLFdJuLSTxH4ft77yIybvzdnnodu/910IztHBryL/AIKj+DfCfgX9rrUvDHgfwbpWg2Mei6c8em6Lp0VtArvbozkRxKqgknPQ/WvYP+CIuqsfHnj3S5ZVUy6JaFIwv3z5si4x9Wr6c+Ov7Af7PP7R/jCb4kfEK01yDWLm0jhuZtM1QRo4SNY1+VoJQOFJBwPvDJxihXR7+b8aYbhLxUxE8yqy9i6UbRTbV2o62vbv0ufj7tdY/MKkD+8a9R+CP7Mfin4teN9H+H+v+IbTwLd+KLIT+D7zxvaXdrY607ELGsMyRtkuxwjAMrNhc5OK+jfiT+wH8Av2XP2kvDfi34y+JPEdx8Fr+5ybxrUTzw3aqSljfNAMrFJsyZIl3Om5ECHdInLfGf43+OP+Clnxp/4QbwWl14e8D+FRb/8ACI+F7PSJJUjim1K1sBNLBaAhZ3e7TaFO1Bti8ws7TPonc/asrz3A57goYvLnz0pq/N2fa3e+5D4u/wCCN/7b/hxmttI8OeGPEMynLjTPE8KvnoTi78gdQeoznvxXj3xR/Y0/ai+CWg3Hif4l/BTXtO0u0ZRc6rDCLi0hLEhS88BeJQSCBlhkg19/f8E8P2+h8TtVP7KX7QGuwt400m6ksdE1+7iKf2+kbbGgm3EH7bhdquRuk2jO59zN9hXtidbs7nTtZsVvLe7SS3vLa5gWeO4hb93JDNHjDJtVVYD5twOOQao46ucYzB1eSvFf8A/nwfzWQkjgcEgcc0yVXVtsgII4we1fZv8AwUm/4JwWf7Ock/xv+DV9DF4PvblhceHru/QXelSMSdsW4gzwY2kbcsgOG6Ej41kSSZsxR5ATOEBwAByefzpI9+hXp4ikpw2Ihwc08MDTXjeM4dCvAPIxwRkGkpmxJRTUbPBp1ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAjdD9KZT26H6UygAooooAd5ntQuSOp6+tNp0aSMfkUn2AoGrX1JrdW2eYWUKkgXd3BYHn8Ntfor/wSc/YUGgafa/tc/GPSitzcR+b4D0m+iD7IzjGqOh5LAE+UCMAMJT8pU14h/wTF/YWk/aY8cH4n/EvT5YvAXh67C3JZONYvAUZbMDq0IBDTFedjBB80i1+jn7Uv7S/gT9kz4N3fxU8UxQPOc2nhzw/G6qdQutu+KBNp+WNUZHZ0BESkg4fygQ8HNMZNzWGofE/yPMf+Ck37b6/sq/Dz/hAfAeo28HxC8SW0iWJVt39jWoLI13xys24PHExwDKJJRlRX5E3jPNM1y8rSlzukkYkks3JyTyTnPJ64Jrofi58T/Gfxo+Iep/FD4g6qbzVtYn867lHCL2SONf4I0QKip0CqMcV9Cf8EY1+Brf8FAPCUn7R/wCz1rXxT8Jf2dq327wR4e8CS+JLq+cWEpjZLGP5pPLbEpb+ERknAGQup6OBwccHh+Xq9z5Ura8GeJ/EPgfWbTxd4T1ybTNW068judPvraUpNDKh3K6ntg4PXk7euDX7/wD7OPxY/YO+Ef7fXxJHgT/glP8AFyy8MXnw+8HC18Hab+yxeyXdlepeaz515NYeWxhWVWiVJTxKbd1XPlGvwS+Ml3b3fxj8WX9jZzWkE3ie/aGyu7M20tujXMhCPCf9UwBwU/hOR2p2udcoQqRcZx5k909muz8j9Xv2H/2yfCn7Xnw4N3qc1paeLtDiQ+JtFVQFIO1ft9uM5EfQsvRDuycEV7bM7PIzP97cQ4GByOAcfw5ABx7571+HvwS+NPjr9n74i6d8T/htrS2eqabcqyF03RzxE/PFIvG+Nh8rLnkEEYKqw/YP9mv9oj4f/tR/DC2+JPw8xBgiHVdD8wPJpVyAMwE9XjyQY5CAXUrkBtyjBxsz+PfFTw3qcM4x5jl8b4Wo7tdacn0/wvp2/PvKfEfLcTJIylSNyxKN7jn5QX+XJycFuBznqKaAT0pwVtowpJ5xx6daTPxrm5Pe6rVfI80+F/7Kvwz+EXxy1z4y/DG0OjL4m0o2Ws6BYx7LQStcRyC4h3cqAAQy9AQWGFda7jxH4q8LeC/DF34z8XaxYabpOnwG4vr3UT5cdtHu2hg2QWONo2jvjuad4q8V+FPA3he98aeNNbtNN0jToVuL/ULsjy44wTgsCRvAPAiB3SlsKDtNfm38ePj18cP+CmXx0s/gF8EdFurLwt/axbT7OR3USlNw/tC9K8EorNsH/LNSVUEk5Elc/R+HOHM549xzxeYV3CjSivaVna6ilpFN6N2+4+jPjR/wUy/YZ8UeF9T+GOpW3iPx/p2rWpgvLHTtBYQyKTyM3MiMrZSNlaPlWVHUhkBX4J0r9k/49fEnxBcj4W/AbxveaNc3r/2VfaroLRDyBnyxJcELEGCkBtrBTgEDgY/Vr9mX9mH4Z/ss/D608F/Dm3inu41Muo+J54VFxf3BCpJIPlYohKfJGBwm3diQuB6O5lIDSSlywySQoz7nb/UA1XM4s+oy/wASMn4H9thOHcNKpTb+KpUbUmvtRikrX/E/LfwB/wAEkP2xdVuItT1CPw/4XMBEltNqfiMPNAQwwyCzEhEikZ5xnqOxr65i/ZY/bE8daXbR/G//AIKJeLMQQRwS2fguwTTwEVdqE3CmNpCQOcxknuT2+iyADg8enNNEbSyLFbxGWVwVSPPAfjZ+PXA9qak2eTmXjPxnmMrUnCmuyim16OV3c+cdF/4JifshaDc3Pirx7Hrni+dIHnvdU8ZeJHCK6gsZJmhETKoAYne2DXyT8RtM8J/trftJaV+zj+xT8IdD8PeGbK4k3ara6d5bzxoP3upXs/L+XEu4Rqckbzt3NKBXov8AwVA/bij1vULv9mH4O620thZTPH4v1iF/nu3X71mhQ4MCsu6TklmC9PLOfm79jv8Aav8AHP7H3xki+IPhaSS60y9hFj4n0drjYmpWTOrlNw+66OiyJIPuvEpORkFx3P3Lw3yXil4N5vnmJlOrUXuU3J8sYvry6JN/h+XIfHb4I/ED4AfE7VfhX8QdENtqGlXAQyRKTDcxtlop4m/ijkT5lPBxwQGDCuMbt9K/Xn9sT9m34c/8FE/2d9H+Kvwe1O2uNfi0oXfgrWEYIdRi6y6ZNk/uf3u9V8w5jlTBwHIr8lfEei6zoOt3Wg65pdzaXmnzvbXlpdQskkEsbFZI2VgGQqwIKkAjoavqfqOCxkcVB30a6FBPvU+mbHVgGUjoeRT8EdRTOwKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEbofpTKe3Q/SmUAFFFFADljdslVJ2jJOOgzivXP2O/wBlPxp+1l8WYPh3oTTWmm2zC58Savtwmn2oJBPPDSvykcZ6scnCB2Xy7TWTasb30cKmdTlycKw4DsAjFgMk8A8Bh1Iz+m/7JX7Wn/BNf9kr4PWfwz8JfH9ri/uNk3iXXB4V1aJ9Ru2QbnJW23CCNvlSL0XJ5JoOTG1a1Kl+6TbfY+n9PsPg7+zJ8EUt7VovDngjwnojOxwuUt16lzx51wZGcM3Wdnm2Z3IK/IH9tX9rvxh+2B8YbnxvrBks9FtS1t4Z0FpP3dhbbmILdjK5Jd2/vPjOABXq3/BSf9vbSP2mtYt/hf8ACXWCngTSruOaW8Ns8Mmt3fl7TdPGyKyRxjhY2AJLM3PG35Juz+92kj5flChshcE8A9x70HHlmAlQvVrazYyU5foOABwc9Bivfv8AgmT+3AP+CdX7XmgftYJ8OD4tbQrDUbU6D/bf9neeLqzlt8+f5E5XAkY8R9QBkZyPANw/u0ZX+7+tB65+unhP/g6dbwx+1x4x/anX9hpbg+LvB2g+H10B/ikwNkmmXWoXBk+0Npp3+aL8ptCLs8onLb8L+UvxL8WR+PfiFrnjuLT/ALIut6xdagLTz/NMHnTPJ5ZfC7iu7bu2rnGcDNYuV/u/rQWB/hoASvXv2Ov2pPGv7KXxKj8ceHrc6hpdxiLXtBecpHqEAOcZwdkq5LRyYyCCuGVnRvIasWbukZKSKvzAnLYwexx36mk48yscuNwODzLCzwuLjzU5q0l3TP3P+GvxL8F/GDwLpfxJ+Hmsi/0vWI1eCTYEYSufmidATsk3H5kycMSFLKFZr/ijxT4Y8D+Gbzxl4z1a207SrCAXN7f3QzGsSkfMQSPMALACJTukLgDOK/Kj9gb9trVf2XPG40LxTd/afBGtTrDrFkwaQ2OcA3kSDJyo++mP3iZUDdtZJ/25/wBuzxD+1B4ql0DwvPNp3gSxvTJpOmF186/mVmC314GB82Qq7gIxwgcgEkyM2PJ7x/L1TwPzKXE8sN7S2Eb5lPqo9IJfzdH06m3+01+038Xv+CiPxpsvgp8GtNu4fDK6oW0XSN7g3TglTf3ZUdUUnBPEUeQMkkn7u/ZD/ZO8Bfsl/DP/AIRTRY4tR1jULfHifW5EBN+7YPlrjlLYYUoF+cg5fBJA+cv2Kfjd/wAE7/2Sfh6Ht/jlFf8Ai7VreN/EWsW/hjVF2sFV/sluzW2fJBJV2IVnZXIAUqB7TL/wU1/YYDky/G5S7fMxj8K6qVJPOBut8gDpj296G+h08dUuK6tFZDkGX1YYKlZO1N/vGt5XttfXz37W98JOAzE52gEZ6Y4wMdgAKTPfNeBn/gpr+wzj/kth4/6lTUv/AJHpB/wUz/YWY8fGxv8AwlNT/wDkepsz8lXAPGkpXjl9a3W8Gj3pwHV3MoQRxl3ZmAAUYyfp0/OvlP8A4KRftyp8BPDknwW+G+sLF4x1W0J1O8t5B5mj2br8u0jJS5lByhODFGS/WSNqsfG//gq7+zZ4P+Gl/qXwQ8Yf8JJ4pkHk6Xp0ujXtrFBIwOLmVpo0jljTHMJGXYoDlN+PzG8Z+KNa8aeJbzxX4k1ia/vtRuXuLu8uJS7yyOxZ3JPOSxJ55Oc96qKdz9Z8L/CrGVcw/tPPMO6apv3YP7T6Skn26efzKzmMQys06GQjdwc9ccdOTkg9eNjdc1+xP/BX/wD4I0/sW/sc/sReN/jx8G/gL8UPDut6J4r0zTrDUfEvjLSr2yignmhV0lSC+kmkYofk2pgBxnoSPx0tJF8p18wDHVCRhlPUc987enue1X73xNrl3ua/8S3typYySCa4Z90gzsJDMQ5zg55x+lbLTQ/qTlmldLQ+kP8Agmv+3Ncfsq+P38AfEe/nPw/8R3IfVHiB36XdMFVL6MDll4jEijkqquvzRqD9Ff8ABVP9hm2+J/h+X9q/4NWEE+q2Vik/iiy0hEEeqWaRblv4NmQXjT7wUkGIIQTtJP5rJMIwWXa2G+VWkzgZ+6egIPtX6Wf8EiP2m47f4F6p4T+Mfxq8LaVp3hrW7a28Lz+IfEdrZXCwOjSTIRcyL5kETFTGADtMsh6rGtM8fMKM6FRYqgttGu6PzRuEbYuWJCJgY5ABywx6dc/UmoXYjFfUX/BR/wCBv7Pfgv4gp8VP2cvi74O1TRdfl8zU/Dvh7xLZ3U2kXjDdL5aQyMTbkngDIVt6jCbTXy/dBRJ8pHTkL0HPal1PUpVY16SmlYQHIzRTFbAwaXePQ0yx1FN3j0NG8ehoAdRTd49DRvHoaAHUU3ePQ0bx6GgB1FJvWjevrQAtFJvFJvHoaAHUU3ePQ0bx6GgBW6H6UynF88YptABRRRQAuxvSkqSmP940AJV3Q/DfiLxPdtYeGtAvdRnWMyNDYWjzOEBALEICcZIGfcetUq/Xb/gy4cr/AMFUPG684PwH1TkMAAf7Z0XqCee4455oA/IoxyAspRgV+8COn1q9ceFvE9pocfia78N38WmyzeVFqMlm6wPJlxsEhG0tmOQYzn5G9DW98XJBN8WfFksQd1Hie+ctMSzqv2hwAxc85LAEkk9M+/6qftoG/X/gzu/ZTjkvJGz8fb6EozHHy3njEbTuAOBhRg8DYOmOQD8gBFKTgRtnOMY71e8L+EvFXjfW4PDPgvwzqOsaldEi20/S7KS4nmIGSFjjBZsDngV61+wb+yR4r/b4/bJ+Hn7HvgPVjZ3njjxEtnNqj26znT7BI3lu7vyiyh2htIpZdgYbjEBuU8199f8ABXv9uTR/+CaPxIvf+CUf/BIW/uPhL4Y8A29nafErx/4WvVg8SeMte8pZJPterRlJwkO4IyJ5S+cZ49qxLGgAPy9+IPwh+LPwlvYdN+Kvwu8R+Gbi5j8y3g8Q6JcWTypgHcqzIpYYIOR6iuedHjbY6lSOoIxX6yf8EWv+CufxT+Pv7QOh/wDBNb/gpt40vPjp8FvjRqC+GpNO+Jt3Jqt7pGq3YK2U9vezZuPmuPLhAMitAZVlgZWjO74y/wCCvv7Bb/8ABNj/AIKCePv2U9O1O81DQNKvIr3wfqd8F8250m6iWa3DsoAeSMMYHcBQ0kDkKoIAAPnW28MeJL3Rp/Edn4evptOtm23N/FaO0MRyowzgbVOXTqf419RVEgqSrAgg8g1+0f8AwTNmaD/g0c/bBcMwz8TrpeJWH3rXw2OmcDrz6jg56V+MFwUIj244jwSABnk+n9eaAFsbG+1S9h0zTLOW5ubiVYre3gjLvLIxwqKo5ZiSAAOSTUmraPq+g376XrulXNldRqrSW13A0cihlDKSrAEZUgj1BB717t/wSskVf+CmX7N4WZFcfH7whgMCRj+2rLlucY47DPXPavof/g6Vmll/4Lk/GUSsfktfDQCkn5f+Kc00459yemOv1oA+B9D8L+JvE8jxeGvDl/qLRlRItjZvMULHC52A4yeB6mna14T8VeG0STxF4Z1CwWQ4ja9spIgx9BuAzX7Kf8GffiLV/CcH7WviTQdSks73TvhTZ3dpcxqCYpYhqDI4HJyrYI4I65HSvg3wZ/wXB/4Ks+FPGzePtT/bi8deKEuIjBqfhfxtq76zoepW7bfMgn06732pR1UKdsattZsMpYkgHyeYpRnMbDGc8dKR0eM7XQqcA4IxwRkH8q/Vb9uz9iP9lf8Abg/4JU2H/Bav9gz4N6d8N9V8P61Honx/+FfhiQjR7K/WWKKS90+LcwtVBuLSTyUAjFvdq5CtHI0n5WTqwYbsk7ATnpyMjH4YoAs6H4b8ReJ7x9P8NaDe6jcR2dzdyQWNq8zrb28Lz3EpVASEihjklduiIjMxAUmqRBHJHXpX6wf8G0Oh/s/fs3/FXw/+1z+1XodvqNp8YfiH/wAKR+G+lTrG5+031kZdS1JonGWhQy6Xp7MDjbrE+f8AV4Pw9/wVB/Yj8S/8E9P27fiN+ypq9ldjT/D2uyS+Fr26+Zr7RLgiawuC4AVma3kjD7eFlWROqEAA8J0rR9X129TTdE0q5vLmRXZLe0gaR2CKXYhVBJAUFj6AEngUt7pOqaTdz6bq2kz29zbH/SILmB0ki6feUgFeo6+orvP2V/2jPil+yF8fPCn7SnwZ1yTTvE/grXItT02QAhJin37eUAqXhmTdE6ZwUd153V+k3/Byn8G/hl+0n4Y+EP8AwXJ/ZltI18C/HnQ7TTPGkEcivJpfiO2hdVWYq2Gm8m3mtXCjar6Y5JzIKAPyestE1nVUupdK0e6uFsbY3F81vAzi3iDKhkcgfIoZ0XccDLAdxVVlZcFlIyMjI6ivtv4gX9x+wr/wST0P4IWsdxpvxF/atv7bxf4s3MUkt/AGmySx6RbMrxgqL7UFu70MjZeC2tlbIYA/E9wEDDY+cjJ9ep6+pxigCP3rQ1jwn4p8PC3bX/DOoWIuwTam8spIvOAxnZuA3feXp/eHrUFlcRwx/vMEBiSokKllIwy5A7j14+Xpzg/td8TNcuf+Czv/AAbEWPjhJRqvxd/Y81Ly9ZkKqbu80G1txFJM26QlY20xoLiSVvmlm0efaCc0AfiUIpGGVjY9eg9Bk/lVjU9C1vRTbrrOjXdobu1S5tBdWzR+dA/3JU3Abkbsw4PY16T+yH+zX4j/AGv/ANqX4f8A7L/gyZlvPHnjCw0Zr63geb7BbyygT3bKOTFDDvncnlUhbdgCu3/4KjftN6B+1f8Atu+MfHHw9ZY/AWgSw+FfhdYxSuYrfwxpSLY6cibydgeCFZ2HTzJpDzmgDwQ+FPFK6MfEbeGtQGnCQxm/NlJ5G8MFK78bc7iBjPU4qjsfbv2nb644/wA8iv1+8FXU0f8AwZx+LlWZlRv2gY0dVHLJ9ssjtJBGeec89AMdx+TPhy8ktPEWm3NlMVnhv4XWRZNhDiT5SG4ZcfLwD2zn0AKmv+GPEvhS9Gm+KfDt9plwyb1t9Qs3hcruK7grgHG5WGfVSO1USCOCMfWv19/4PTjn/gqf4CyR/wAm/aZ2/wCo3rtfkG+c/N6D+VAF7SPC3ifxBaXl/oPhy/vYNPhMt/PaWbypbRgM2+QqCEXCscnAwp9DVAgjgiv2M/4Nz5p/+HRn/BSqHc2xfghKygyfKCdA8R5IHY8DJ78elfjxdzeeyMD0THU9cknOScck9OPagCKreheH9e8U6tBoHhjRLzUb66k2W1lYWzzTTNgnaqICzHAPAHaqu1ipcKcA4JxwD/kGv0r/AODdL/hT/wCyf8ddN/4KXftPaV/xTmnfETR/hl8P5rhxFCniHW8reag8jMFWCw0kXMku4Ebr62wQcGgD808HAOOvSlSOSU7Y0LEAkhRngDJP5AmvrX/gt7+wDd/8E4v+Cknj34AaTohtfCmo3n/CQ/DsJGwR9DvXd4Ik3EswgdZrQsTlntHbvXyhbO8ULyRMRIMNGQeRjkkY5BGAc+gNAG58P/g/8W/izcXVp8K/hZ4j8TS2SB72Lw/odxetbqc4ZxCjFBweTjoay/E3hTxT4L12fwv4x8NahpOp2r7LrTtTsnt54W9GjkAZT7EV+3P/AAXU+HX7YX7APwB/Z++I3/BKz43+OfBX7Lem/Cqxih1X4W+KbzTorjW7qWW4/tXU2sipla+gmsyk0zNHvWVAUMg8z8wP2vP+Cmn7bv7eXw68H/DT9rv443njSx8DT3c+hXt/pltHdxrciGNxPPEiyXIQwqVMu58yyAsRtwAfOxBBwRgjqDRUt9I8l07SJtbcdy44Dd8e2c0UAJTH+8afTXXPIoAbX66f8GXgDf8ABVHxsh6N8BdWBwP+ovo3+ea/Iuvu/wD4N7v+CmXwA/4JSftm+If2kP2jPDfi3V9F1f4b3vhu3tPBdha3F2lzNf6fcrI63VzAoiCWkoJVi24qNuDQBz3xL/4KjarpPxF8RaUP2B/2VpRba1c2zTy/AuzlZyk0ibi5kJZiPmLHqfpX25/wU2+KE/xs/wCDTn9mL4lyeAvC/hmTVv2hbthoPgrQYtM0y2CzeLoh5FrESsQbZvYAnLu56mvx28ea5p/iXxvrnijT5CYdS1a5uoBcxqsm2V3c5UNIAQHH8RORwcivtn9oj/gqH+z18XP+CC/wX/4JdeHPDni2D4g/Db4oXHiLWtVvdOgGiXFrJNr8gS2m+1PcO4GqW64lhUfI/PAyAb3/AAaqeLfC/g//AILWfDiDxVJFDJrGia7p+ky3AUKt2+lzyIAzY2l0jdFI5YuFGd1eA/8ABZ3wJ4t+Hv8AwVm/aP0PxjYyQ3U3xl1/U4lfJ/0W+vpb21bns1vPEw9jxxXiXwv+JvjL4M/EXQvi/wDC/wAXz6F4o8Navb6loWr2YQPZXcEqSpMo+YfK44XbtYcc8qfvv9sn9vH/AIJmf8FirrQfjf8Atf8A/Ca/AD48WWkwad4r8X+A/CEfiXw34ohgiCxyvaSX1vdWs4OUTDS7IlVXeXCbAD5n/wCCQfgDxX8Sv+Cpn7O/hLwdYXU1+vxn8PXz/ZEJkt7a0v4bq5nx6RwQyyk9hETX0x/wdifGHwj8V/8Agsh4s0jwhexXK+CvCmj+HtRngZWQ3ccLXMqAqTkoboRsOqvGynla4n9nb9vb9jz/AIJUajrHxM/4J9af4l+KfxmvdHudL0P4sfFDwpaaLpng6CZVSSfTNHS6vXuLx0aVftE86IgYr9neN5Uk+JfH3ivxH4+8Y6l8QPGfie61nW9fvZtS1zVL+4aa4u72aRpJ5pZD993kZnLZOd+Sc5AAP2G/4JtMq/8ABot+1+WYD/i6cw5P/TDw1X4xBHPAUnkDgV+lf/BN7/gqj+wh8D/+CPvxg/4Jg/ta6R8Xobz4peOp9Wj8Q/Dnw/pd5FY2rW2lLH/x+6hbEy+bp77l2ldjLhskgeCyaR/wRD0D4W+KXs/il+1Xr/jZtA1AeCN3gfwzpGlLqRgcWgvsapezG387Z5piw5jLbRnGQDhf+CWqsP8Agpx+zkxBA/4Xv4QIJ9P7atBX0d/wdLgj/guZ8ZyRwbfw0QfX/inNNr5O/Y1+M3hH9nr9sH4T/H3xnaX9zoPgP4oaF4i1e001I5LuS0s9QhuZUhDvGrymOEhclAWIDMvBHqH/AAWh/bX+FH/BRH/gpD8QP2wPglofiHTfDfiyLSFsLHxTaQQX0TWmlWllJ5i29xPHgyW7spV+VZcgHNAH3h/waRMsXhj9sSeRgqJ8GIi7scBfk1A8nt0P5V+OESFfvxsoypZ9v3V4/wAR+Yr9Af8Agg1/wVL/AGYf+Cav/C79M/aZ8M+O7+0+KXgqDQ9Lm8CaNY3c1owF0sksn2u8ttoCzgqEY7iDnGBnyr4d6T/wRM8La1/bnxI+K37T3juxtcvB4Ys/h14e8OC8YE7I5L5tbv2ijycOUgLkEldp+YAH6Jf8Elkj+DP/AAatftg/EX4s2s2n6H4r1fW9P8MpfRFUu7mfTdP06CWHcMODeyLDuXP7y3cdUOPxa8A+DPF/xB8X6P8ADjwDo0+o6/4h1K30zRdNs/mkvbu4kjSCBNp5ZpHTAJ+8VHY19Yf8FIP+Cvni/wDbi+Ffg/8AZY+E3wh0T4QfAf4cCNfBPwp8NXklyElWN1F3e3cqq13c/vJfnKjJlldt0jmV/PP+CaH7S3wQ/Y5/aPm/ad+LnhjVNa1vwd4R1a++FOmafptrd2a+MPszx6XcXyzzxFLW3mb7QXj3yiSGIojUAfYP/BSH/gm1+1zf+Nvhz+y1+zfJ8OrjwL+z94Jt/DGjaiP2hvCeny3/AIkdzfa7qv2W81dZ7OaXU5po/LdVdYrOAELtAH0J/wAHG/7PvjD9r3/gmx8Df+Csmt2ujSfEjwZo9l4N+OA8K6/p2qWsLS8pN9o024ntRHHqLybUjctt1aJW2lMD8QNf1rUPEWu3uueINWlvr++unub/AFG6uHnlup2Zi8ju+Wd3YlmYk5JJr9Bv+CPX/BWv9mT9kn9kf49fsF/t2eBvGviP4Y/F3TnbS7fwLpWnXd1pF9PbG1urgC9uIFDMiWMiMrMUlsEbaOTQB+eShZokeaRY0V/lCsMouRuIB5PLDH0PpX68/wDBtFcad/wUJ+Dvx4/4IfftAPdzfD/xh4Obxv4e1S1mQ3HhrVLa9sYWltw3XdJLaTbPug28ikYmkNfkHqos1vpE0+8kuIFYrDNNFsd0BwpZdzBTtA4DEDpk4r7n/wCDe7/gpj8AP+CUv7ZviL9pH9ozw14u1fRdW+G954btrTwVYWlxdpcz3+n3KyOt1cwKIglpKCVYsGKjbg5oA+e/+Ch37RN9+1J+2N43+J66JHo2iw6n/Y3g3w3bqFh0LQdPUWWm6fGo+VVhtIIUOAAzh3IyxrxVl2mtv4hazY+JPHms+I9NaUwahqlxdRefEqOFkkZwGCu4B+b+831NYzDIoAZX6Qf8GwP7a2gfszf8FDov2ffiu8F18O/2gdL/AOEH8TaVf5a1kvJyw0+WSPaRJmV3s8MQAmoysfu1+b5BHWrOmaheaVcJqOl301rdwSpLbXFvKUeN1YMGVhggggEEHIK0AfpH4n/ZK1j/AII7fEb9svx94i0+5N54MeX4SfBW9ulZp5rrxRBLLFqKTxECOaHw0l27Y5Sa+hU4zX5svG0RYZYqB8rMpGRkEHn1BB/Gvu//AILW/wDBYO+/4Klaf8EbS1iNtH4O+HNvP49hXT1tRf8AjG4VIdTuRjiWIxWtmIScmNTIoOCa+EgyrJ5lxMDuYFtgycYz06enHbFAH65eDgT/AMGcPi0YPH7QUWeOn+lWVfkpoyOPEdllT/x/Rdv9sV9y+Hv+CnX7Pug/8EE9f/4JaXfhPxW/xE1T4pJ4lh1eHTbI6KtutxbOY2m+0eb5m2FsYhK8qN2MgfD2izada67az6pcOLeG5QyS2673CI4JKhnTJwDgEjPt1oA/Wn/g9Q4/4KneAs/9G/6X/wCnzXa/Id4Zn3OkTEIFDkLwpxjB9K/Vf/gsZ/wUf/4I3/8ABXT9o7w/+0h4l8T/ALTHgjUNC8GW3huXT7D4aeHL+C5tYry8ug6l9diZJC1665O4AIvy5zXw9+1/N/wTmSw8J237AGufG66nggux4zvPjPa6RbhpCYPswsI9NmlMabRdGQSMxyYwuTQB+iH/AAbnn/jUf/wUtHf/AIUbJx/3AfElfjt5UoB3RsMKGOR0Bxg/qPzr9FP+CM3/AAVD/Y3/AGHP2XP2nP2ZP2tPD/xMvLT4/eELfw9baj8OtK0+7l063NhqVnPMwvLy3XfjUA0agOP3Z3YwM+Z+B9O/4II6XeTy/Ez4u/tga9DFvOmWeieAPC2kiLjKK8j6td/xAbmRFJ5wM0AfIWlQX13NHZaXbzzXU8yxW8EEZd5HcjaqADO4kAccnOPr+nf7f3/BL39rLTfhv8IP2H/gfpXw3k0H4S+D2ufGkuofHHwbps95461Upc61JLBdalDcYtlW006Pzo1cJpwYEq4J+OP+CcPx8+Av7L/7YnhD9pH9orwvrviLSPAF5J4g0bQNDELNqGu2ytJpazySzw+XbpeeTLLIPMYpG6iNgxNeO/Ezx/4t+LnxG1/4r/EbXjqniHxRrV1q+u6lIAGu7y5meaaZgoABaR2YgAAZ6DpQB+4X/BaD9m74q/tx/wDBDL4Rft0+OrDRb34z/s/W0Xhn4vSeGvGel+IWubDMVvLdTXelzTRSTGRbG/MQfMCX9wWAALH8Kw8MitJI+5edqvnBJ4U4GACBz16qQa/QH/ghd/wV1+Bv/BPXw98aP2c/20PAPinxj8F/jB4Qaz1fQPCdvDcXaXxDWr7Eubu2jjins7m4SV1JlLQ22OFJHwl4jk8M2ni6+j8F6nf3WmQalLHo97qgS3u5LMOUheURyyJFLsEZKxs6LyNzqKAPuP8A4Jkf8HA37W//AATi0B/gH4i0PSPip8HJGuYtR+GHjJAq2lvM7/aILCfa4tFkLsXgkSa3OXxGHkLV7Z/wWc/4JvfsOfEL9hHwj/wWq/4Je6beeFPh54s1lbfxl8NdQhMUGjXk08lvLJBEXb7K8V3F9mltoy8JDRvb4iTn5KuPhn/wRh+J+vy+IPC/7ZPxv+E9g+xl8LeLfgzY+KDZvyxSK/s9XthcxKcKDJbRMRyQeten/t4/8FXfgH4m/wCCffgL/gkn+wF4K8T6X8IPB+ojV/FHiz4gGOLWfFupebPcMrW9nNJDDameZpQpdn3LbDMQhbzAD8/L2c3M5mJOSOSepPTJ5OSep9yaKS7dJJBIjEgoODjIxxjj6UUAN3r60b19aZRQA/cp6mk/d02igB37uj93TaKAHfu6P3dNooAdlP8AIpdyf5FMooAdlDR+7ptFADv3dH7um0UAO/d0fu6bRQA793R+7ptFADv3dH7um0UAOyn+RS7l9aZRQA/evrRvX1plFAD9y+tJlPb8qbRQA793R+7ptFADv3dH7um0UAO/d0fu6bRQA793R+7ptFAD8p/kUhKHrTaKAHfu6P3dNooAVtuOKSiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k=' w={"40%"} alt='holiday-villas logo' />
            </Link>

            <Drawer isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent backgroundColor="black">
                <DrawerCloseButton color="white" />
                <DrawerBody color="white" fontSize="14px" textAlign="center">
                  <Box mt="2rem">
                    <Text>ARE YOU A PROPERTY OWNER/MANAGER?</Text>
                      List New Property

                    <Text color="whiteAlpha.700">
                      Sign in to your Dashboard
                    </Text>
                  </Box>

                  <Divider color="whiteAlpha.800" h="6" mb="4rem" />

                  <Box>
                    <Text>HOLIDAY HOMES FOR SALE</Text>
                    <Text color="whiteAlpha.700" mt="0.6rem" mb="0.6rem">
                      Tripvillas Managed
                      <Text fontSize="13px">
                        Homes from A grade developers. Rentals guaranteed
                      </Text>
                    </Text>
                    <Text color="whiteAlpha.700">
                      Marketplace
                      <Text fontSize="13px">
                        See what homes are up for sale from different property
                        owners.
                      </Text>
                    </Text>
                  </Box>

                  <Divider color="whiteAlpha.800" h="6" mb="1rem" />

                  <Box>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      About Us
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      Privacy Policy
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      Terms of Use
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      FAQs
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      Contact Us
                    </Text>
                  </Box>

                  <Divider color="whiteAlpha.800" h="6" mb="1rem" />

                  <Text color="whiteAlpha.800">?? Tripvillas Pte Ltd</Text>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

        <HStack style={{ backgroundColor: "black" }} p={"5px"} gap="10px">
            <PlusSquareIcon color={"White"} cursor="pointer" onClick={onOpen}/>
            <Button bg={"black"} color={"white"}>INR<ArrowDownIcon/></Button>
                
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay>
                        <ModalContent w={"7rem"} ml="600px">
                            <ModalBody >
                            <Link to={'/SignIn'}><Box>Sign In</Box></Link>
                            <Link to={'/Signup'}><Box>Sign up</Box></Link>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>

            <Button
              as={IconButton}
              icon={<HamburgerIcon color="white" h="5" w="5" />}
              backgroundColor="black"
              color="white"
              onClick={onOpen}
              _hover={{
                bg: "none",
                color: "none",
              }}
            >
            </Button>
        </HStack>
            
        </HStack>  
    </Box>   
    </>
    )
}


