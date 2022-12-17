import { Box, VStack, Tab, TabList, TabPanel, TabPanels, Tabs, HStack } from "@chakra-ui/react";

export default function Footer(){

    return(
        <Box w={'90%'} m='auto'>
        <Tabs w={'100%'}>
            <TabList>
                <Tab>ASIA</Tab>
                <Tab>EUROPE</Tab>
                <Tab>NORTH AMERICA</Tab>
                <Tab>SOUTH AMERICA</Tab>
                <Tab>AFRICA</Tab>
                <Tab>OCEANA</Tab>
            </TabList>

            <TabPanels>
            <TabPanel>
                <HStack fontStyle={'normal'} justifyContent='space-evenly'>
                    <VStack  cursor={'pointer'} gap={3}>
                    <p>India</p>
                    <p>Georgia</p>
                    <p>Combodia</p>
                    <p>Oman</p>
                    </VStack>

                    <VStack cursor={'pointer'} gap={3}>
                    <p>Thailand</p>
                    <p>Turkey</p>
                    <p>Nepal</p>
                    <p>Bangaladesh</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Sri Lanka</p>
                    <p>Israel</p>
                    <p>Maldives</p>
                    <p> </p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Indonesia</p>
                    <p>Malaysia</p>
                    <p>Taiwan, province of china</p>
                    <p> </p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Philippines</p>
                    <p>Japan</p>
                    <p>Hong Kong special Administration region of China</p>
                    <p> </p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>United Arab Emirates</p>
                    <p>Viet Nam</p>
                    <p>Republic of Korea</p>
                    <p>.</p>
                    </VStack>

                </HStack>
            </TabPanel>

            <TabPanel>
            <HStack fontStyle={'normal'} justifyContent='space-evenly'>
                    <VStack  cursor={'pointer'} gap={3}>
                    <p>Croatia</p>
                    <p>Finland</p>
                    <p>Sweden</p>
                    <p>Poland</p>
                    <p>Bulgaria</p>
                    <p>Luxembourg</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Denmark</p>
                    <p>Germany</p>
                    <p>Cyprus</p>
                    <p>Belgium</p>
                    <p>Ukraine</p>
                    <p>Serbia</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Italy</p>
                    <p>Hungary</p>
                    <p>Czech Republic</p>
                    <p>Slovakia</p>
                    <p>Montenegro</p>
                    <p>Iceland</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Spain</p>
                    <p>Austria</p>
                    <p>Portugal</p>
                    <p>Slovenia</p>
                    <p>Albania</p>
                    <p>Lithania</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>France</p>
                    <p>Greece</p>
                    <p>Norway</p>
                    <p>Ireland</p>
                    <p>Bosnia And Herzegovina</p>
                    <p>The Former Yugoslav Republic of Macedonia</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Switzerland</p>
                    <p>Unied Kingdom of Great Britian</p>
                    <p>Netherland</p>
                    <p>Malta</p>
                    <p>Romania</p>
                    <p>Andorra</p>
                    </VStack>
                </HStack>

            </TabPanel>

            <TabPanel>
            <HStack fontStyle={'normal'} justifyContent='space-evenly'>
                    <VStack  cursor={'pointer'} gap={3}>
                    <p>United State of America</p>
                    <p>Jamaica</p>
                    <p>Panama</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Mexico</p>
                    <p>Aruba</p>
                    <p>Curacao</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Dominican Republic</p>
                    <p>Puerto Rico</p>
                    <p>.</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Cuba</p>
                    <p>Saint Martin</p>
                    <p>.</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Canada</p>
                    <p>Sint Maarten</p>
                    <p>.</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Costa Rica</p>
                    <p>Belize</p>
                    <p>.</p>
                    </VStack>
                </HStack>
            </TabPanel>

            <TabPanel>
            <HStack fontStyle={'normal'} justifyContent='space-evenly'>
                    <VStack  cursor={'pointer'} gap={3}>
                    <p>Colombia</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Chile</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={2}>
                    <p>Brazil</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={2}>
                    <p>Argentina</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={2}>
                    <p>Peru</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={2}>
                    <p>Ecuador</p>
                    </VStack>
                </HStack>
            </TabPanel>

            <TabPanel>
            <HStack fontStyle={'normal'} justifyContent='space-evenly'>
                    <VStack  cursor={'pointer'} gap={3}>
                    <p>Kenya</p>
                    <p>Rwanda</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>South Africa</p>
                    <p>Burundi</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={2}>
                    <p>Morocco</p>
                    <p>Madagascar</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={2}>
                    <p>Uganda</p>
                    <p>Egypt</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={2}>
                    <p>Mauratius</p>
                    <p>Tunisa</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={2}>
                    <p>Tanzania</p>
                    <p>Seychelles</p>
                    </VStack>
                </HStack>
            </TabPanel>

            <TabPanel>
            <HStack fontStyle={'normal'} justifyContent='space-evenly'>
                    <VStack  cursor={'pointer'} gap={3}>
                    <p>Austriala</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>New Zealand</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={2}>
                    <p>French Polynesia</p>
                    </VStack>
                </HStack>
            </TabPanel>

            </TabPanels>
        </Tabs>
        <Box h={'2rem'}>

        </Box>
        </Box>
    )
}