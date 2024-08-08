-- CreateThread(function ()
--     GlobalState.counter = 0
-- end)

-- RegisterCommand('inc', function ()
--     GlobalState.counter = (GlobalState.counter + 1)
-- end, true)

--- Player id = 1

--  Exemplo como usar player State e refleti-lo no servidor com uso de statebags --
-- CreateThread(function ()
--     while true do
--         Wait(500)

--         for _, serverId in pairs(GetPlayers()) do
--             print('serverId: ', serverId, '| counter: ', Player(serverId).state.counter)
--         end
--     end
-- end)

----- Verificando qual ultimo jogador que entrou no veiculo ----
-- RegisterNetEvent('baseevents:enteredVehicle', function (vehicleId, seatIndex, vehicleDisplayName, vehNetId)
--     local playerId = source

--     if seatIndex ~= -1 then
--         return
--     end

--     local vehicleEntity = NetworkGetEntityFromNetworkId(vehNetId)

--     Entity(vehicleEntity).state:set('lastDriver', playerId)
-- end)